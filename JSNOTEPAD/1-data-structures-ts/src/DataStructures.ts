/*
  simple custom set
*/
class MySet {
  public collection: string[] = [];
  constructor() {}

  hasInCollection(elementToFind: string): boolean {
    return this.collection.indexOf(elementToFind) !== -1;
  }
  displayCollection() {
    return this.collection;
  }
  addToCollection(elementToAdd: string) {
    if (this.hasInCollection(elementToAdd)) {
      this.collection.push(elementToAdd);
      return elementToAdd;
    }
    return console.error("no duplicates");
  }
  removeFromCollection(elementToRemove: string) {
    if (this.hasInCollection(elementToRemove)) {
      const index = this.collection.indexOf(elementToRemove);
      const collectionReference = this.collection.splice(index, 1);
      this.collection = collectionReference;
      return console.log(`element ${elementToRemove} removed`);
    }
    return console.log(`element ${elementToRemove} not found`);
  }
}

/*
  Binary search tree
*/
interface TreeNode_ {
  data: number;
  left: null | TreeNode_;
  right: null | TreeNode_;
}

class TreeNode implements TreeNode_ {
  data: number;
  left: null | TreeNode = null;
  right: null | TreeNode = null;

  constructor(data: number, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  root: TreeNode | null | undefined = null;
  constructor() {}

  addNode(data: number) {
    const node = this.root;
    if (node === null) {
      this.root = new TreeNode(data, null, null);
      return;
    }
    const searchTree = (node: any): any => {
      if (data < node.data) {
        if (!node.left) {
          node.left = new TreeNode(data);
          return;
        } else if (!node.left) {
          return searchTree(node.left);
        }
      } else if (data > node.data) {
        if (!node.right) {
          node.right = new TreeNode(data);
          return;
        } else if (!node.right) {
          return searchTree(node.right);
        }
      } else {
        return null;
      }
    };
    return searchTree(node);
  }

  fincMin() {
    let current = this.root;
    while (!current?.left) {
      current = current?.left;
    }
    return current.data;
  }

  fincMax() {
    let current = this.root;
    while (!current?.right) {
      current = current?.right;
    }
    return current.data;
  }

  find(data: any) {
    let current = this.root;
    while (current?.data !== data) {
      if (current) {
        if (data < current?.data) {
          current = current?.left;
        } else {
          current = current?.right;
        }
        if (!current) {
          return null;
        }
      }
    }
    return current;
  }

  isPresent(data: any) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      }
      current = current?.right;
    }
    return false;
  }

  remove(data: any) {
    const removeNode = function (node: any, data: any) {
      if (!node) {
        return null;
      }
      if (data == node.data) {
        // node has no children
        if (!node.left && !node.right) {
          return null;
        }
        //node has no left child
        if (!node.left) {
          return node.right;
        }
        //node has no right child
        if (!node.right) {
          return node.left;
        }
        let tempNode = node.right;
        while (tempNode.left) {
          tempNode = tempNode.left;
        }

        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }

  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  findMinHeight(node = this.root): any {
    if (!node) {
      return -1;
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  findMaxHeight(node = this.root): any {
    if (!node) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  inOrder() {
    if (!this.root) {
      return null;
    } else {
      let result = new Array();
      function traverseInOrder(node: any) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }

  preOrder() {
    if (!this.root) {
      return null;
    } else {
      let result = new Array();
      function traversePreOrder(node: any) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }

  postOrder() {
    if (!this.root) {
      return null;
    } else {
      let result = new Array();
      function traversePostOrder(node: any) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }

  levelOrder() {
    let result: any = [];
    let Q: any = [];
    if (!this.root) {
      Q.push(this.root);

      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (!node.left) {
          Q.push(node.left);
        }
        if (!node.right) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}

const bst = new BinaryTree();

bst.addNode(9);
bst.addNode(4);
bst.addNode(17);
bst.addNode(3);
bst.addNode(6);
bst.addNode(22);
bst.addNode(5);
bst.addNode(7);
bst.addNode(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.addNode(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log("inOrder: " + bst.inOrder());
console.log("preOrder: " + bst.preOrder());
console.log("postOrder: " + bst.postOrder());
console.log("levelOrder: " + bst.levelOrder());

/*
  Binary search tree
*/

"use strict";
class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    }
    append(value) {
        const newNode = new Node(value, null);
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
    }
    delete(value) {
        if (!this.head) {
            return;
        }
        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }
        let curNode = this.head;
        if (!curNode) {
            return;
        }
        while (curNode.next) {
            if (curNode.next.value === value) {
                curNode.next = curNode.next.next;
            }
            else {
                curNode = curNode.next;
            }
        }
        if (this.tail?.value === value) {
            this.tail = curNode;
        }
    }
    insertAfter(value, afterValue) {
        const existingNode = this.find(afterValue);
        if (!existingNode) {
            return;
        }
        if (existingNode) {
            const newNode = new Node(value, existingNode.next);
            existingNode.next = newNode;
        }
    }
    find(value) {
        if (!this.head) {
            return null;
        }
        let curNode = this.head;
        while (curNode) {
            if (curNode.value === value) {
                return curNode;
            }
            if (!curNode.next) {
                return null;
            }
            curNode = curNode.next;
        }
        return null;
    }
    toArray() {
        const elements = [];
        let curNode = this.head;
        while (curNode) {
            elements.push(curNode);
            curNode = curNode.next;
        }
        return elements;
    }
}
const linkedList1 = new LinkedList();
linkedList1.append("1");
linkedList1.append("12");
linkedList1.append("13");
linkedList1.append("b");
linkedList1.append("a");
linkedList1.delete("13");
linkedList1.append("c");
linkedList1.append("c");
linkedList1.delete("c");
linkedList1.append("18");
console.log(linkedList1.toArray());
console.log(linkedList1.find("1"));

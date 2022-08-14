/*
   circular queue 
*/
type Item = number | null;

class CircularQueue {
  #list: Item[];
  #capacity: number;
  #tail = -1;
  #head = -1;
  #size = 0;

  constructor(capacity: number) {
    this.#capacity = Math.max(Number(capacity), 0) || 10;
    this.#list = Array(this.#capacity).fill(null);
  }

  get size() {
    return this.#size;
  }

  get isFull(): boolean {
    return this.size === this.#capacity;
  }

  get isEmpty(): boolean {
    return this.size === 0;
  }

  enqueue(item: number) {
    if (!this.isFull && this.#list) {
      this.#tail = (this.#tail + 1) % this.#capacity;
      this.#list[this.#tail] = item;
      this.#size += 1;

      if (this.#head === -1) {
        this.#head = this.#tail;
      }
    }
    return this.size;
  }

  dequeue() {
    let item = null;

    if (!this.isEmpty && this.#list) {
      item = this.#list[this.#head];
      this.#list[this.#head] = null;
      this.#head = (this.#head + 1) % this.#capacity;
      this.#size -= 1;

      if (!this.size) {
        this.#head = -1;
        this.#tail = -1;
      }
    }
    return item;
  }

  peek() {
    if (this.#list) {
      return this.#list[this.#head];
    }
  }

  print() {
    if (this.#list) {
      console.log(this.#list.filter((el) => el !== null));
    }
  }
}
const cq = new CircularQueue(5); // [null,null,null,null,null]
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40); //[10,20,30,40,null]

/*
   Priority queue 
*/
type ItemPriorit = {
  item: number;
  priority: number;
};

class PriorityQueue {
  #list: ItemPriorit[] = [];
  #capacity: number | null;

  constructor(capacity: number) {
    this.#capacity = Math.max(Number(capacity), 0) || null;
  }

  get size() {
    return this.#list.length;
  }

  get isFull(): boolean {
    return this.#capacity !== null && this.size === this.#capacity;
  }

  get isEmpty(): boolean {
    return this.size === 0;
  }

  enqueue(item: number, priority = 0) {
    priority = Math.max(Number(priority), 0);
    const element: ItemPriorit = { item, priority };

    if (
      this.isEmpty ||
      element.priority >= this.#list[this.size - 1].priority
    ) {
      this.#list.push(element);
      return this.size;
    }
    for (let index in this.#list) {
      if (element.priority > this.#list[index].priority) {
        this.#list.splice(Number(index), 0, element);
        break;
      }
    }
    return this.size;
  }

  dequeue() {
    return this.isEmpty ? null : this.#list.shift()?.item;
  }

  toString() {
    return this.#list.map((el) => el.item).toString();
  }
}

const pq = new PriorityQueue(5);
// [{item:12, priority:0}, {item:24, priority:3}]
pq.enqueue(12);
pq.enqueue(24, 3);

/*
   Queue 
*/
class Queue<T> {
  #list: T[] = [];
  #capacity: number;

  constructor(capacity: number) {
    this.#capacity = Math.max(Number(capacity));
  }

  get size() {
    return this.#list.length;
  }

  get isEmpty() {
    return this.size === 0;
  }

  get isFull(): boolean {
    return this.#capacity !== null && this.size === this.#capacity;
  }

  enqueue(item: T) {
    if (this.#capacity === null || this.size < this.#capacity) {
      return this.#list.push(item);
    }
    return this.size;
  }

  dequeue() {
    return this.#list.shift();
  }

  peek() {
    return this.#list[0];
  }

  print() {
    console.log(this.#list);
  }
}

type PrinterType = () => void;

class Printer extends Queue<PrinterType> {
  #id: number = 0;
  #printing = false;

  constructor() {
    super(10);
    this.#id = Math.floor(Math.random() * 1000);
  }

  #printDocs = () => {
    this.#printing = true;
    setTimeout(() => {
      const docCall = this.dequeue();
      if (docCall) docCall();

      if (this.isEmpty) {
        this.#printing = false;
        return;
      }
      this.#printDocs();
    }, Math.floor(Math.random() * 2000));
  };

  pushPrintTask<T>(doc: T): Promise<unknown> {
    return new Promise((resolve, reject) => {
      if (this.isFull) {
        reject("Printeer is Full");
      }
      this.enqueue(() => resolve(doc));

      if (!this.#printing) {
        this.#printDocs();
      }
    });
  }
}

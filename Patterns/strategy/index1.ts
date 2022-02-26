export interface IArray {
  sorter: Sorter;
  data: number[];
}
abstract class Sorter {
  constructor() {}
  abstract sort(data: number[]): void;
}
//fist strategy
class BubbleSorter extends Sorter {
  constructor() {
    super();
  }

  sort(data: number[]) {
    const n = data.length;
    setTimeout(() => {
      console.log(`Bublesortet finish in ${n * n}`);
    }, n * n);
  }
}
//second strategy
class QuickSorter extends Sorter {
  constructor() {
    super();
  }
  sort(data: number[]): void {
    const n = data.length;
    setTimeout(() => {
      console.log(`Quick Finished in ${n * Math.log10(n)} ms`);
    }, n * Math.log10(n));
  }
}

//implement strategy
class SmallArray implements IArray {
  sorter: Sorter;
  data: number[];

  constructor(d: number[]) {
    this.sorter = new BubbleSorter();
    this.data = d;
  }

  sort() {
    this.sorter.sort(this.data);
  }
}

class BigArray implements IArray {
  sorter: Sorter;
  data: number[];

  constructor(d: number[]) {
    this.sorter = new QuickSorter();
    this.data = d;
  }

  sort() {
    this.sorter.sort(this.data);
  }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sorter {
    constructor() { }
}
//fist strategy
class BubbleSorter extends Sorter {
    constructor() {
        super();
    }
    sort(data) {
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
    sort(data) {
        const n = data.length;
        setTimeout(() => {
            console.log(`Quick Finished in ${n * Math.log10(n)} ms`);
        }, n * Math.log10(n));
    }
}
//implement strategy
class SmallArray {
    constructor(d) {
        this.sorter = new BubbleSorter();
        this.data = d;
    }
    sort() {
        this.sorter.sort(this.data);
    }
}

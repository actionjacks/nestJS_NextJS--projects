"use strict";
const someArray = [1, "dupa", true, 1.23];
class Literrator {
    constructor(array) {
        this.array = array;
        this.index = 0;
    }
    hasNext() {
        return this.index < this.array.length;
    }
    next() {
        return this.array[this.index++];
    }
}
const tablica = new Literrator(someArray);
tablica.hasNext();
tablica.next();
tablica.next();
tablica.hasNext();

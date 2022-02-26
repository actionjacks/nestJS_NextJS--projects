const someArray = [1, "dupa", true, 1.23];

class Literrator<T> {
  private index = 0;
  constructor(public array: Array<T>) {}

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

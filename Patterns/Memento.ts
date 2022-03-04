class Memento {
  value: string = "";
  constructor(value: string) {
    this.value = value;
  }
}

const creator = {
  save: (val: string) => new Memento(val),
  restore: (memento: Memento) => memento.value,
};

class Caretaker {
  values: Array<Memento>;

  constructor() {
    this.values = [];
  }

  addMemento(memento: Memento) {
    this.values.push(memento);
  }

  getMemento(index: number) {
    return this.values[index];
  }
}

const careTaker = new Caretaker();

careTaker.addMemento(creator.save("hello"));
careTaker.addMemento(creator.save("dupa"));
careTaker.addMemento(creator.save("kakaowe"));

console.log(creator.restore(careTaker.getMemento(1)));

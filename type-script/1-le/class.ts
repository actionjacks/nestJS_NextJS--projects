class Perssona {
  constructor(public _age: number, public name: string) {}

  public changeName(name: string) {
    this.name = name;
  }

  get age() {
    return this._age;
  }
  set age(value: number) {
    if (value <= 0) {
      throw new Error("invalid age");
      return;
    }
    this._age = value;
  }
}

const perssona = new Perssona(12, "jacek");
perssona.age;
perssona.age = 21;

//abstract to instrukcja jak klasa ma wygladac szkic klasy
abstract class Human {
  abstract age: number;
  abstract name: string;

  abstract greetings(): void;
  abstract getAge(): number;
}
//abstrac nie mozna tworzyc instancji
class HumanPerson extends Human {
  constructor(public age: number, public name: string) {
    super();
  }

  greetings(): void {
    console.log("Hello");
  }

  getAge(): number {
    return this.age;
  }
}
interface HumanForClass {
  age: number;
  name: string;
  greetings(): void;
  getAge(): number;
}
class HumanPersonUsingInterfaces implements HumanForClass {
  constructor(public age: number, public name: string) {}

  greetings(): void {
    console.log("Hello");
  }

  getAge(): number {
    return this.age;
  }
}

//static

class SomeClass {
  static MY_STATIC_DATA = 1;

  constructor() {}

  static myStaticFunc(val: number) {
    return { myNumber: val };
  }
}

console.log(SomeClass.MY_STATIC_DATA);
console.log(SomeClass.myStaticFunc(2));

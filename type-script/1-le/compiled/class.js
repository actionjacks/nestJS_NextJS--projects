"use strict";
class Perssona {
    constructor(_age, name) {
        this._age = _age;
        this.name = name;
    }
    changeName(name) {
        this.name = name;
    }
    get age() {
        return this._age;
    }
    set age(value) {
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
class Human {
}
//abstrac nie mozna tworzyc instancji
class HumanPerson extends Human {
    constructor(age, name) {
        super();
        this.age = age;
        this.name = name;
    }
    greetings() {
        console.log("Hello");
    }
    getAge() {
        return this.age;
    }
}
class HumanPersonUsingInterfaces {
    constructor(age, name) {
        this.age = age;
        this.name = name;
    }
    greetings() {
        console.log("Hello");
    }
    getAge() {
        return this.age;
    }
}

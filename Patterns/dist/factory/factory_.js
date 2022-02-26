"use strict";
class EmployerTemplate {
}
class Developer {
    constructor(name) {
        this.name = name;
        this.type = "Developer";
        this.printName = () => console.log(`${this.name}`);
        this.printName();
    }
}
class Tester {
    constructor(name) {
        this.name = name;
        this.type = "Tester";
        this.printName = () => console.log(`${this.name}`);
        this.printName();
    }
}
class EmployerFactory {
    constructor() {
        this.createEmployer = (name, type) => {
            switch (type) {
                case "Developer":
                    return new Developer(name);
                    break;
                case "Tester":
                    return new Tester(name);
                    break;
            }
        };
    }
}
const employerFacotry = new EmployerFactory();
const developer = employerFacotry.createEmployer("jacek", "Developer");

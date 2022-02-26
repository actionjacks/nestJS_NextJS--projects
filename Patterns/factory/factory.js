class Developer {
  name;
  type = "Developer";

  constructor(name) {
    this.name = name;
  }
}

class Tester {
  name;
  type = "Tester";

  constructor(name) {
    this.name = name;
  }
}

class EmpleyerFactory {
  createObject = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
        break;
      case 2:
        return new Tester(name);
        break;
    }
  };
}

const empleyerFactory = new EmpleyerFactory();

const jacekDeveloper = empleyerFactory.createObject("jacek", 1);
const placekTester = empleyerFactory.createObject("placek", 2);

console.log(jacekDeveloper, placekTester);

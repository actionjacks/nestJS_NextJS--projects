type Specialization = "Developer" | "Tester";

interface Employer {
  name: string;
  type: Specialization;
  printName: () => void;
}

abstract class EmployerTemplate {
  abstract createEmployer: (name: string, type: Specialization) => void;
}

class Developer implements Employer {
  type: Specialization = "Developer";

  constructor(public name: string) {
    this.printName();
  }
  printName = () => console.log(`${this.name}`);
}

class Tester implements Employer {
  type: Specialization = "Tester";

  constructor(public name: string) {
    this.printName();
  }
  printName = () => console.log(`${this.name}`);
}

class EmployerFactory implements EmployerTemplate {
  public createEmployer = (name: string, type: Specialization) => {
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

const employerFacotry = new EmployerFactory();

const developer = employerFacotry.createEmployer("jacek", "Developer");

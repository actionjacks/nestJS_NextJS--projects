interface Door {
  open: () => void;
  close: () => void;
}

class CarOpen {
  open() {
    console.log("opening car door");
  }

  close() {
    console.log("Closing the car door");
  }
}

class SecuritySystem {
  constructor(public door: Door) {}

  open(password: string) {
    if (this.authenticate(password)) {
      this.door.open();
    } else {
      console.log("access denied");
    }
  }

  authenticate(password: string) {
    return password === "Dupa";
  }

  close() {
    this.door.close();
  }
}

const securitySystem = new SecuritySystem(new CarOpen());
securitySystem.authenticate("Dupa_");
securitySystem.authenticate("Dupa");

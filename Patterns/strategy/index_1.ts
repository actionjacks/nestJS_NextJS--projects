class SalaryStrategy {
  salary;
  constructor(paymentDetails?: number) {
    this.salary = paymentDetails;
  }

  paymentAmount() {
    return (this.salary! / 12).toFixed(2);
  }
}

class HourStrategy {
  constructor(public hoursRate?: number, public numberOfHours?: number) {}

  paymentAmount() {
    return this.hoursRate! * this.numberOfHours!;
  }
}

type EmplyerDetails = {
  name: string;
  salary: number;
  hoursRate: number;
  numberOfHours: number;
};

abstract class EmployerTemplate2 {
  abstract employeeDetails: EmplyerDetails;
  abstract sendPayment(strategyClass: HourStrategy | SalaryStrategy): void;
}

class Emplyee implements EmployerTemplate2 {
  name;
  salary;
  hoursRate;
  numberOfHours;

  constructor(public employeeDetails: EmplyerDetails) {
    this.name = employeeDetails.name;
    this.hoursRate = employeeDetails.hoursRate;
    this.numberOfHours = employeeDetails.numberOfHours;
    this.salary = employeeDetails.salary;
  }

  sendPayment(strategyClass: SalaryStrategy | HourStrategy) {
    if (strategyClass instanceof SalaryStrategy) {
      const strategy = new SalaryStrategy(this.salary!);
      const paymentAmount = strategy.paymentAmount();
      console.log(`sending ${paymentAmount} to ${this.name}`);
    }
    if (strategyClass instanceof HourStrategy) {
      const strategy = new HourStrategy(this.hoursRate, this.numberOfHours);
      const paymentAmount = strategy.paymentAmount();
      console.log(`sending ${paymentAmount} to ${this.name}`);
    }
  }
}

const jacek = new Emplyee({
  name: "jacek",
  salary: 1,
  hoursRate: 12,
  numberOfHours: 8,
});
jacek.sendPayment(new HourStrategy());
jacek.sendPayment(new SalaryStrategy());

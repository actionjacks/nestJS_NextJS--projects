"use strict";
class SalaryStrategy {
    constructor(paymentDetails) {
        this.salary = paymentDetails;
    }
    paymentAmount() {
        return (this.salary / 12).toFixed(2);
    }
}
class HourStrategy {
    constructor(hoursRate, numberOfHours) {
        this.hoursRate = hoursRate;
        this.numberOfHours = numberOfHours;
    }
    paymentAmount() {
        return this.hoursRate * this.numberOfHours;
    }
}
class EmployerTemplate2 {
}
class Emplyee {
    constructor(employeeDetails) {
        this.employeeDetails = employeeDetails;
        this.name = employeeDetails.name;
        this.hoursRate = employeeDetails.hoursRate;
        this.numberOfHours = employeeDetails.numberOfHours;
        this.salary = employeeDetails.salary;
    }
    sendPayment(strategyClass) {
        if (strategyClass instanceof SalaryStrategy) {
            const strategy = new SalaryStrategy(this.salary);
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

"use strict";
class OfficialDealer {
    constructor() {
        this.customers = [];
    }
    orderAuto(customer, auto, info) {
        const name = customer.getName();
        console.log(`Order name: ${name} order auto is ${auto} info-${info}`);
        this.addToCustomersList(name);
    }
    addToCustomersList(name) {
        this.customers.push(name);
    }
    getCustomerList() {
        return this.customers;
    }
}
class Customer {
    constructor(name, dealerMediator) {
        this.name = name;
        this.dealerMediator = dealerMediator;
    }
    getName() {
        return this.name;
    }
    makeOrder(auto, info) {
        this.dealerMediator.orderAuto(this, auto, info);
    }
}
const mediator = new OfficialDealer();
const placekJacek = new Customer("jacek", mediator);
placekJacek.makeOrder("polonez", "autopilot");

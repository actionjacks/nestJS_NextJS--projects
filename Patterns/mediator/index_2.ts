class OfficialDealer {
  customers: Array<string> = [];

  orderAuto(customer: Customer, auto: string, info: string) {
    const name: string = customer.getName();
    console.log(`Order name: ${name} order auto is ${auto} info-${info}`);
    this.addToCustomersList(name);
  }

  addToCustomersList(name: string) {
    this.customers.push(name);
  }

  getCustomerList() {
    return this.customers;
  }
}

class Customer {
  name;
  dealerMediator;
  constructor(name: string, dealerMediator: OfficialDealer) {
    this.name = name;
    this.dealerMediator = dealerMediator;
  }

  getName() {
    return this.name;
  }

  makeOrder(auto: string, info: string) {
    this.dealerMediator.orderAuto(this, auto, info);
  }
}

const mediator = new OfficialDealer();
const placekJacek = new Customer("jacek", mediator);

placekJacek.makeOrder("polonez", "autopilot");

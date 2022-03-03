class Account {
  name: string | null = null;
  balance: number | null = null;
  incomer: Payment | null = null;

  pay(orderPrice: number) {
    if (this.canPay(orderPrice)) {
      console.log(`Paid ${orderPrice} usinf ${this.name}`);
    } else if (this.incomer) {
      console.log(`Cannot pay usin ${this.name}`);
    } else {
      console.log(`no enouh money`);
    }
  }

  canPay(amount: number) {
    if (!this.balance) {
      return;
    }
    return this.balance >= amount;
  }
  setNext(account: Payment) {
    this.incomer = account;
  }

  show() {
    console.log(this);
  }
}

abstract class Payment {
  abstract name: string;
  abstract balance: number;
}

class Master extends Account {
  name: string;
  balance: number;

  constructor(balance: number) {
    super();
    this.name = "Master Card";
    this.balance = balance;
  }
}

class Paypal extends Account {
  name: string;
  balance: number;

  constructor(balance: number) {
    super();
    this.name = "Paypal";
    this.balance = balance;
  }
}

class Qiwi extends Account {
  name: string;
  balance: number;

  constructor(balance: number) {
    super();
    this.name = "Qiwi";
    this.balance = balance;
  }
}

const master = new Master(100);
const paypal = new Paypal(200);
const qiwi = new Qiwi(700);

master.setNext(paypal);
paypal.setNext(qiwi);

master.pay(430);
qiwi.pay(430);

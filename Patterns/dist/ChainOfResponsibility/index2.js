"use strict";
class Account {
    constructor() {
        this.name = null;
        this.balance = null;
        this.incomer = null;
    }
    pay(orderPrice) {
        if (this.canPay(orderPrice)) {
            console.log(`Paid ${orderPrice} usinf ${this.name}`);
        }
        else if (this.incomer) {
            console.log(`Cannot pay usin ${this.name}`);
        }
        else {
            console.log(`no enouh money`);
        }
    }
    canPay(amount) {
        if (!this.balance) {
            return;
        }
        return this.balance >= amount;
    }
    setNext(account) {
        this.incomer = account;
    }
    show() {
        console.log(this);
    }
}
class Payment {
}
class Master extends Account {
    constructor(balance) {
        super();
        this.name = "Master Card";
        this.balance = balance;
    }
}
class Paypal extends Account {
    constructor(balance) {
        super();
        this.name = "Paypal";
        this.balance = balance;
    }
}
class Qiwi extends Account {
    constructor(balance) {
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

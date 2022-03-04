type nextStatus = {
  nextStatus: () => void;
};

interface Constructable<T> {
  new (...args: any): T;
}

class OrderStatus {
  constructor(
    public name: string,
    public nextStatus: Constructable<Function>
  ) {}

  next() {
    return new this.nextStatus();
  }
}

class WaitingForPayment extends OrderStatus {
  constructor() {
    super("waitingForPayment", Shipping2);
  }
}

class Shipping2 extends OrderStatus {
  constructor() {
    super("Shiping", Delivered);
  }
}

class Delivered extends OrderStatus {
  constructor() {
    super("delivered", Delivered);
  }
}

class Order2 {
  state: WaitingForPayment;
  constructor() {
    this.state = new WaitingForPayment();
  }

  nextState() {
    this.state.next();
  }
}

const myOrder = new Order2();
console.log(myOrder.state.name);

myOrder.nextState();

type Order = {
  from: string;
  to: string;
  boxSize: string;
};

class OrderFactory {
  constructor(public order: Order) {
    if (order.from === "wasilkow") {
      return new OrderByBus(order);
    } else if (order.from === "bialystok") {
      return new OrderByCar(order);
    }
  }
}

class OrderByBus {
  constructor(public order: Order) {
    this.printBoxSize();
  }

  printBoxSize = () => {
    console.log(this.order.boxSize);
  };
}
class OrderByCar {
  constructor(public order: Order) {
    this.printBoxSize();
  }

  printBoxSize = () => {
    console.log(this.order.boxSize);
  };
}

const orderObj: Order = {
  from: "wasilkow",
  to: "warszawa",
  boxSize: "A4",
};
const order1 = new OrderFactory(orderObj);

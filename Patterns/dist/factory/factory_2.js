"use strict";
class OrderFactory {
    constructor(order) {
        this.order = order;
        if (order.from === "wasilkow") {
            return new OrderByBus(order);
        }
        else if (order.from === "bialystok") {
            return new OrderByCar(order);
        }
    }
}
class OrderByBus {
    constructor(order) {
        this.order = order;
        this.printBoxSize = () => {
            console.log(this.order.boxSize);
        };
        this.printBoxSize();
    }
}
class OrderByCar {
    constructor(order) {
        this.order = order;
        this.printBoxSize = () => {
            console.log(this.order.boxSize);
        };
        this.printBoxSize();
    }
}
const orderObj = {
    from: "wasilkow",
    to: "warszawa",
    boxSize: "A4",
};
const order1 = new OrderFactory(orderObj);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = exports.Bus = void 0;
class VehicleFactory {
    constructor(order) {
        this.printmanufacturedViehicle = () => {
            return this.manufacturedViehicle;
        };
        this.order = order;
        switch (order.type) {
            case "bus":
                this.manufacturedViehicle = new Bus(order.color, order.transmission, order.armchairs);
                break;
            case "osobowy":
                this.manufacturedViehicle = new Car(order.color, order.transmission, order.armchairs);
                break;
        }
        this.printmanufacturedViehicle();
    }
}
class Bus {
    constructor(color, transmission, armchairs) {
        this.color = color;
        this.transmission = transmission;
        this.armchairs = armchairs;
        this.make = () => console.log("bus manufactured !");
        this.make();
    }
}
exports.Bus = Bus;
class Car {
    constructor(color, transmission, armchairs) {
        this.color = color;
        this.transmission = transmission;
        this.armchairs = armchairs;
        this.make = () => console.log("car manufactured !");
        this.make();
    }
}
exports.Car = Car;
const firstOrder = {
    type: "bus",
    color: "red",
    transmission: "5",
    armchairs: 5,
};
const secondOrder = {
    type: "osobowy",
    color: "yellow",
    transmission: "15",
    armchairs: 2,
};
const car1 = new VehicleFactory(firstOrder);

import {
  VehiclesFactoryTemplate,
  VehicleToManufactureTemplate,
  OrderTemplate,
} from "./types/interfaces";

class VehicleFactory implements VehiclesFactoryTemplate {
  public manufacturedViehicle;
  public readonly order: OrderTemplate;

  constructor(order: OrderTemplate) {
    this.order = order;

    switch (order.type) {
      case "bus":
        this.manufacturedViehicle = new Bus(
          order.color,
          order.transmission,
          order.armchairs
        );
        break;
      case "osobowy":
        this.manufacturedViehicle = new Car(
          order.color,
          order.transmission,
          order.armchairs
        );
        break;
    }
    this.printmanufacturedViehicle();
  }
  printmanufacturedViehicle = () => {
    return this.manufacturedViehicle;
  };
}

export class Bus implements VehicleToManufactureTemplate {
  constructor(
    public color: string,
    public transmission: string,
    public armchairs: number
  ) {
    this.make();
  }
  make = () => console.log("bus manufactured !");
}

export class Car implements VehicleToManufactureTemplate {
  constructor(
    public color: string,
    public transmission: string,
    public armchairs: number
  ) {
    this.make();
  }
  make = () => console.log("car manufactured !");
}

const firstOrder: OrderTemplate = {
  type: "bus",
  color: "red",
  transmission: "5",
  armchairs: 5,
};

const secondOrder: OrderTemplate = {
  type: "osobowy",
  color: "yellow",
  transmission: "15",
  armchairs: 2,
};

const car1 = new VehicleFactory(firstOrder);

import { Bus, Car } from "../MainFactory";

export interface Order {
  type?: VehicleType;
  color: string;
  transmission: string;
  armchairs: number;
}

export type Vehicle = {
  make: () => void;
} & Order;

export type VehicleType = "bus" | "osobowy";

export abstract class VehiclesFactoryTemplate {
  abstract manufacturedViehicle: typeof Car | Bus;
  abstract order: Order;
}

export abstract class VehicleToManufactureTemplate implements Vehicle {
  abstract make: () => void;
  abstract color: string;
  abstract transmission: string;
  abstract armchairs: number;
}

export abstract class OrderTemplate implements Order {
  abstract type: VehicleType;
  abstract color: string;
  abstract transmission: string;
  abstract armchairs: number;
}

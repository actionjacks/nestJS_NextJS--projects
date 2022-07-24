import { AssertionError } from "assert";

/*
  in GUARD 
*/
type Data1 = {
  val: string;
  val2: number;
};
type Data2 = {
  val3: string;
  val4: number;
};

const typeGuard = (doc: Data1 | Data2) => {
  //console.log(doc.val3); //err
  if ("val3" in doc) {
    console.log(doc.val3);
  }
};

/*
  typePredictives
*/
type FinalInvoce = {
  __typename: "FinalInvoce";
};
type DrafInvoce = {
  __typename: "DrafInvoce";
};
type Invoce = FinalInvoce | DrafInvoce;

const isFinalInvoce = (invoice: Invoce): invoice is FinalInvoce => {
  return invoice.__typename === "FinalInvoce";
};
const isDrafInvoce = (invoice: Invoce): invoice is DrafInvoce => {
  return invoice.__typename === "DrafInvoce";
};

/*
  type aSSERT FUNC
*/
function assertIsNumber(val: unknown): asserts val is number {
  if (typeof val !== "number") {
    throw new AssertionError({ message: "not a number" });
  }
}
function double(input: unknown) {
  assertIsNumber(input);
  return input * 2;
}

/*
  type Lookup types
*/
type Route = {
  origin: {
    city: string;
    state: string;
    departureFee: number;
  };
  destination: {
    city: string;
    state: string;
    arrivalFee: number;
  };
};

type Origin = Route["origin"];
type Desitnation = Route["destination"];

const tripleOrigin: Origin = {
  city: "",
  state: "",
  departureFee: 0,
};

/*
  type GENERIC
*/
enum TaskType {
  feature = "feature",
  bug = "bug",
}

type Task<T = TaskType> = {
  name: string;
  type: T;
};

type FeatureTask = Task<TaskType.feature>;

const whatever: Task = {
  name: "lorem ipsum",
  type: TaskType.feature,
};
whatever.type = TaskType.bug;

const feature: FeatureTask = {
  name: "lorem lorem",
  type: TaskType.feature,
};
// feature.type = TaskType.bug; - error

/*
  extract utility fun
*/
type Trip =
  | {
      origin: {
        uuid: string;
        city: string;
        state: string;
      };
    }
  | {
      originUuid: string;
    };

type TripWithOriginRef = Extract<Trip, { originUuid: string }>;
type TripWithOriginWhole = Extract<Trip, { origin: { uuid: string } }>;

const tripOriginRef: TripWithOriginRef = { originUuid: "123" };
const tripleOriginWhole: TripWithOriginWhole = {
  origin: {
    uuid: "12",
    city: "swswsw",
    state: "sasa",
  },
};

const hasOrginReg = (trip: Trip): trip is TripWithOriginRef => {
  return "orginUud" in trip;
};
const result = [tripOriginRef, tripleOriginWhole].filter(hasOrginReg);

/*
  conditional Types
*/
type Disel = {
  type: "petrol" | "bio" | "syntetic";
};
type Gasoline = {
  type: "hybrid" | "conventional";
};
type Bus = {
  engine: Disel;
};
type Car = {
  engine: Gasoline;
};

type Engine<T> = T extends { engine: unknown } ? T["engine"] : never;
type BusEngine = Engine<Bus>;

const busEngine: BusEngine = {
  type: "bio",
};
const carEngine: Engine<Car> = {
  type: "hybrid",
};

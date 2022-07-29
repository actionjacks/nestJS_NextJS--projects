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

const backlog = {
  releases: [
    {
      name: "lotem",
      epics: [
        {
          name: "lore ",
        },
      ],
    },
  ],
};
type Unarray<T> = T extends Array<infer U> ? U : T;
type Release = Unarray<typeof backlog["releases"]>;

/*
  partials,
  make - properties optional
*/
interface Starship {
  name: string;
  enablehiperdrive: boolean;
}

const updateStarship = (starship: Partial<Starship>) => {
  console.log(starship);
};
updateStarship({ name: "jacel" });

/*
  record
*/
const starships: Record<string, Starship> = {
  starship1: {
    name: "jp",
    enablehiperdrive: true,
  },
};

/*
  pick - pick values
   - omit - dont take spec value
*/
const nameOfStarship: Pick<Starship, "name"> = {
  name: "klll",
};
const nameOfStarship2: Omit<Starship, "name"> = {
  enablehiperdrive: false,
};

/*
  return types
*/
function paintStarship(id: number, color: string) {
  return {
    id,
    color,
  };
}
type paintStarshipReturnTypes = ReturnType<typeof paintStarship>;

/*
  mixin class -class get params or methods we specify and type of instance of some class
*/
type Contructable<ClassInstance> = new (...args: any[]) => ClassInstance;

function Deletable<BaseClass extends Contructable<{}>>(Base: BaseClass) {
  return class extends Base {
    deleted: boolean;
    delete() {}
  };
}

class Class1 {
  constructor(public name: string) {}
}
class Class2 {
  constructor(public name: string) {}
}

const DeletableClass1 = Deletable(Class1);
const DeletableClass2 = Deletable(Class2);
// got deleted and delete method
const useClass1 = new DeletableClass1("jacek");

type DeletableClass1Instance = InstanceType<typeof DeletableClass1>;
type DeletableClass2Instance = InstanceType<typeof DeletableClass2>;

class HoldInstanceOfClass {
  class1: DeletableClass1Instance;
  class2: DeletableClass2Instance;
}

const main = new HoldInstanceOfClass();
main.class1 = new DeletableClass1("jac");
main.class2 = new DeletableClass2("jac");

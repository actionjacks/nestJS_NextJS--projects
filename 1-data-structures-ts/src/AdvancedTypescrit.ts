import { AssertionError } from "assert";
import { T } from "ramda";
import { String, Union } from "ts-toolbelt";

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

export class SDK {
  constructor(public loggedInUserId?: string) {}

  createPost(title: string) {
    this.assertUserIsLoggedIn(); // check if user is not undefind
    // some method for create post
    // need loggedInUserId but can been undefind
    // createPost(this.loggedInUserId, title);
  }
  //declare this is assets function make loggedInUserId is not undefind
  assertUserIsLoggedIn(): asserts this is this & {
    loggedInUserId: string;
  } {
    if (!this.loggedInUserId) {
      throw new Error("user is not logged in");
    }
  }
}

/*
  type Lookup types (index Access Types) 
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

type City__ = Route["destination"]["city"];

function updateAdress(
  orgin: Route["origin"],
  newAddress: Route["destination"]
) {}

const GETPROPERTIESFORMOBJECT = <T, K extends keyof T>(Obj: T, Key: K) => {
  return Obj[Key];
};
const getProp_1 = GETPROPERTIESFORMOBJECT({ j: 123, k: "dupa" }, "k");

interface MyMouseEvent {
  x: number;
  y: number;
}
interface MyKeyboardEvent {
  key: string;
}
interface MyEventObject {
  click: MyMouseEvent;
  keypress: MyKeyboardEvent;
}
function handleEvent<K extends keyof MyEventObject>(
  eventName: K,
  callback: (event: MyEventObject[K]) => void
) {}

handleEvent("click", (event) => {});

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

interface Animal {
  name: string;
}
interface Human {
  firstName: string;
  lastName: string;
}

const displayName = <TItem extends Animal | Human>(item: TItem) => {
  if ("name" in item) {
    return item.name;
  }
  return item.firstName;
};

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

type isStringOrNot<T> = T extends string ? string : never;
type fo1 = isStringOrNot<{}>;
type fo2 = isStringOrNot<"1">;

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
updateStarship({ name: "jacek" });

class StateOptional<T> {
  constructor(public current: T) {}

  update(next: Partial<T>) {
    this.current = { ...this.current, ...next };
  }
}
const stateOptional = new StateOptional({ x: 0, y: 0 });
stateOptional.update({ x: 12 });
//example
export class State_<T> {
  constructor(public current: T) {}

  update(next: Partial<T>) {
    this.current = { ...this.current, ...next };
  }
}

const state_ = new State_({ x: 0, y: 0 });
state_.update({ x: 0, y: 123 });
//partail optional property and now we can pass only x when we wanna update
state_.update({ x: 123 });

// partial is only one level deep,
// partial next level deep to make properties  parrtial
interface Post {
  id: string;
  comments: { value: string }[];
  meta: {
    name: string;
    description: string;
  };
}

type DeepPartialObject<Thing> = {
  [Key in keyof Thing]?: DeepPartial<Thing[Key]>;
};
interface DeepPartialArray<Thing> extends Array<DeepPartial<Thing>> {}

type DeepPartial<Thing> = Thing extends Function
  ? Thing
  : Thing extends Array<infer InferredArrayMember>
  ? DeepPartialArray<InferredArrayMember>
  : Thing extends object
  ? DeepPartialObject<Thing>
  : Thing | undefined;

const post: DeepPartial<Post> = {
  meta: { name: "jacek" },
};

//  required
type CircleConfig = {
  color?: string;
  radius?: number;
};
class Circle {
  private config: Required<CircleConfig>;

  constructor(config: CircleConfig) {
    this.config = {
      color: config.color ?? "red",
      radius: config.radius ?? 0,
    };
  }
  draw() {
    console.log(
      `drawing circle
      ${this.config.color}
      ${this.config.radius}`
    );
  }
}

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
type myyyy = ReturnType<() => true>;

/*
  INFER
  return types condition return if
*/
type InferSomething<T> = T extends infer U ? U : never;
type Inferred = InferSomething<"12">;

type InferSomething2<T> = T extends { a: infer A; b: number } ? A : never;
// a musi miec cos jednoscesnie b musi byc liczba
type Inferred2 = InferSomething2<{ a: "1"; b: 1 }>;

type OnlyStringReunType<T> = T extends (...arg: any[]) => infer R
  ? R extends string
    ? R
    : never
  : never;

// type BetterSyntax<T> = T extends (...arg: any[]) => (infer R extends string)
//   ? R
//   : never;

/*
  mixin class -class get params or methods we specify and type of instance of some class
*/
type Contructable<ClassInstance> = new (...args: any[]) => ClassInstance;

function Deletable<BaseClass extends Contructable<{}>>(Base: BaseClass) {
  return class extends Base {
    deleted: boolean | undefined;
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
  class1: DeletableClass1Instance | undefined;
  class2: DeletableClass2Instance | undefined;
  constructor() {}
}

const main = new HoldInstanceOfClass();
main.class1 = new DeletableClass1("jac");
main.class2 = new DeletableClass2("jac");

/*
  mixin class 
*/
class Dispasable {
  isDispased: boolean = false;
  dispase() {
    this.isDispased = true;
  }
}

class Activatable {
  isActive: boolean = false;
  activate() {
    this.isActive = true;
  }

  deactivate() {
    this.isActive = false;
  }
}
// mixin
export type Class_ = new (...args: any[]) => any;
export function DisableMixin<Base extends Class_>(base: Base) {
  return class extends base {
    isDispased: boolean = false;

    dispose() {
      this.isDispased = true;
    }
  };
}

export function ActivatableMixin<Base extends Class_>(base: Base) {
  return class extends base {
    isActive: boolean = false;
    activate() {
      this.isActive = true;
    }

    deactivate() {
      this.isActive = false;
    }
  };
}
// use mixin
const Example = DisableMixin(ActivatableMixin(class {}));
type Example = InstanceType<typeof Example>;

function takeExample(example: Example) {
  example.activate();
  console.log(example.isActive);
}

class Example_ extends Example {
  member = 123;
  constructor() {
    super();
    console.log(this.isActive);
  }
}

/*
  MAPED   
  Object Key iteration  !
*/
export type Point = {
  x: number;
  y: number;
};
type X = Point["x"]; //number

// uninon of Point kys = 'x' | 'y' take keys of object
type PointKeys = keyof Point;

interface Cat {
  name: string;
}
type ReadOnlyCat = Readonly<Cat>;

export type ReadonlyPoint<T> = {
  readonly [Key in keyof T]: T[Key];
};

export const orgin: ReadonlyPoint<Point> = {
  x: 0,
  y: 0,
};
//same  readonly [Key in keyof T]: T[Key];
// orgin.x = 10 // error

type Prizes = {
  first: string;
  second: string;
};
function logPrizes(prizes: Prizes) {
  let key: keyof Prizes;
  for (key in prizes) {
    console.log(key, prizes[key].toUpperCase());
  }
}

const myObject = {
  a: 1,
  b: 2,
  c: 3,
};
const objectKeys = <Obj>(obj: Obj): (keyof Obj)[] => {
  return Object.keys(obj) as (keyof Obj)[];
};

objectKeys(myObject).forEach((key) => {
  console.log(myObject[key]);
});

/*
  Array Guards
*/
type Foo1 = {
  type: "square";
  size: number;
};
type Foo2 = {
  type: "rectangle";
  height: number;
  width: number;
};
type FOO = Foo1 | Foo2;

const foos: FOO[] = [
  { type: "square", size: 1 },
  { type: "rectangle", height: 12, width: 12 },
];
const isFoo = (s: FOO): s is Foo1 => s.type === "square";

const findSquareInFoos = foos.find((s): s is Foo1 => s.type === "square");
const findSquareInFoos2 = foos.find(isFoo);

const sizeInFoos = findSquareInFoos?.size;

const findRectangleInFoos = foos.filter(
  (s): s is Foo2 => s.type === "rectangle"
);
const squereSizes = findRectangleInFoos.map((s) => s.height);

/*
  MAPED andvanced
*/
export type Point_ = {
  readonly x: number;
  y?: number;
};
export type Mapped<T> = {
  +readonly //remove optional from type add + to add readonly or - to remove
  [P in keyof T]-?: T[P];
};

export type Result = Mapped<Point_>;

//create new interface maped union types and add something
type Properties_ = "Aporp" | "Bporp" | "Cporp";
type NewMappedType<Properties extends string | number | symbol> = {
  [P in Properties]: P;
};
type newNewMappedType = NewMappedType<Properties_>;

type Pick1<T, Properties extends keyof T> = {
  [P in Properties]: T[P];
};
type PickOnlyAFropmObject = Pick1<{ a: 1; b: 2 }, "a">;
type PickOnlyAAndBFropmObject = Pick1<{ a: 1; b: 2; c: 3 }, "a" | "b">;

/*
  types and interfaces
*/
export interface Point2D {
  x: number;
  y: number;
}
export interface Point3D extends Point2D {
  z: number;
}

export type Point2D_ = {
  x: number;
  y: number;
};
export type Point3D_ = Point2D_ & {
  z: number;
};

/*
  GENERIC and use type
*/
type A<T> = (x: T) => T;
const strToStr: A<string> = function (x: string) {
  return x + "__";
};
strToStr("a");

type B = <T>(x: T) => T;
const identity: B = function <T>(x: T) {
  return x;
};

/*
  NEVER  
  funkcja przyjmuje 2 argumenty i zwraca jesli na koncu nie bedzie error funkcja bedzie za kazdym razem zwracac undefinded aby to obslozyc musimy zwrocic erorr lub never w tedy nie bedzie undyfinded w tym co funkcja moze zwrocic
*/
const assertUnreachable = (value: never): never => {
  throw new Error(`invalid value: ${value}`);
};
const getMode = (value: 1 | 2) => {
  if (value === 1) {
    return "one";
  }
  if (value === 2) {
    return "two";
  }
  return assertUnreachable(value);
};

/*
  Remove
*/
type Letters = "a" | "b" | "c";
type RemoveC<TType> = TType extends "c" ? never : TType;
type WowWithoutC = RemoveC<Letters>;

const KEYREMOVER =
  <Key extends string>(keys: Key[]) =>
  <Obj>(obj: Obj): Omit<Obj, Key> => {
    return {} as any;
  };
const keyRemover = KEYREMOVER(["a", "b"]);
const objectOnlyWhitC = keyRemover({ a: 1, b: 2, c: 3 });
objectOnlyWhitC.c;

//
type LooseAutocomplete<T extends string> = T | Omit<string, T>;
type IconSize = LooseAutocomplete<"sm" | "xs">;
interface IconProps {
  size: IconSize;
}

/*
  Dynamic function arguments with GENERICS
*/
type Event =
  | {
      type: "LOG_IN";
      payload: {
        userId: string;
      };
    }
  | {
      type: "SIGN_OUT";
    };

const sendEvent = <Type extends Event["type"]>(
  ...args: Extract<Event, { type: Type }> extends { payload: infer TPayload }
    ? [type: Type, payload: TPayload]
    : [Type]
) => {};

sendEvent("SIGN_OUT");
sendEvent("LOG_IN", { userId: "12" });

/*
  TS ignore
    // @ts-ignore  - ignore line of code
    // @ts-nocheck - ignore in all file
*/
function getShape() {
  console.log("fo");
}
type Circle_ = { radius: number };
type Squere_ = { size: number };
const example: unknown = {};

if (true && example === Object && "radius" in example) {
  //@ts-ignore
  declare const example: Circle_;
  console.log("lorem ipsum", example.radius);
}

/*
  UNKNOWN
*/
const foo_: unknown = null;
if (typeof foo_ === "string") {
  foo_.trim();
}

function returnWhatIPassIn<TInput>(input: TInput): TInput {
  return input;
}
const resuult = returnWhatIPassIn({});

/*
  template string
*/
let templateLiteral: `Example: ${string}`;
templateLiteral = "Example: ";

type Size_ = "small" | "medium" | "large";
type Color_ = "primary" | "secondary";
type Stype = `${Size_}-${Color_}`;

/*
  TypeScript Opaque Types // Nominal vs Structural Typing 
  guard - dodatkowe sprawdzenie czy przekazane wartosci do funkcji są we właściwej kolejności
*/
type AccountNumber = number & { _: "AccountNumber" };
type AccountBalance = number & { _: "AccountBalance" };

const makeAccountNumber = (accountNumber: number): AccountNumber =>
  accountNumber as AccountNumber;
const makeAccountBalance = (accountBalance: number): AccountBalance =>
  accountBalance as AccountBalance;

function setupAccount(
  accountNumber: AccountNumber,
  accountBalance: AccountBalance
) {
  return `
  ur ballance of ${accountNumber} is 
  ${accountBalance} PLN`;
}

const accountNumber: AccountNumber = makeAccountNumber(12);
const accountBalance: AccountBalance = makeAccountBalance(12);
setupAccount(accountNumber, accountBalance);

/*
  GLOBAL declare interface REDUX
*/
declare global {
  interface GlobalReducerEvent {
    ADD_TODO: {
      id: string;
      text: string;
    };
  }
}
declare global {
  interface GlobalReducerEvent {
    LOG_IN: {};
  }
}
// make union-type from global declare interface
type GlobalReducer<TState> = (
  state: TState,
  event: {
    [EventType in keyof GlobalReducerEvent]: {
      type: EventType;
    } & GlobalReducerEvent[EventType];
  }[keyof GlobalReducerEvent]
) => TState;

const todosReducer: GlobalReducer<{ todos: { id: string }[] }> = (
  state,
  event
) => {
  event.type === "ADD_TODO";
  return state;
};

/*
  Using EXTENDS to constrain generic DEEP COPY
*/
const getDeepValue = <
  Obj,
  FirstKey extends keyof Obj,
  SecondKey extends keyof Obj[FirstKey]
>(
  obj: Obj,
  firstKey: FirstKey,
  secondKey: SecondKey
): Obj[FirstKey][SecondKey] => {
  return {} as any;
};

const obj = {
  foo: {
    a: true,
    b: 2,
  },
  bar: {
    c: "cool",
    d: 2,
  },
};

//pass obj and first property and second and get value
const result_ = getDeepValue(obj, "bar", "d");
const result_2 = getDeepValue(obj, "foo", "a");

/*
  TYPESCIPT CURRING, OVERLOADS
*/
export function compose<Input, FirstArg>(
  func: (input: Input) => FirstArg
): (input: Input) => FirstArg;

export function compose<Input, FirstArg, SecondArg>(
  func: (input: Input) => FirstArg,
  func2: (input: FirstArg) => SecondArg
): (input: Input) => SecondArg;

export function compose<Input, FirstArg, SecondArg, ThirdArg>(
  func: (input: Input) => FirstArg,
  func2: (input: FirstArg) => SecondArg,
  func3: (inut: SecondArg) => ThirdArg
): (input: Input) => ThirdArg;

export function compose(...args: any[]) {
  return {} as any;
}

const addOne = (a: number) => {
  return a + 1;
};
const numToString = (a: number) => {
  return a.toString();
};
const stringToNum = (a: string) => {
  return parseInt(a);
};

const addOneToString = compose(addOne, numToString, stringToNum);
addOneToString(2);

/*
  Remove Object keys return DesiredShape
*/
interface ApiData {
  "maps:longitude": string;
  "maps:latitude": string;
}

type RemoveMaps<T> = T extends `maps:${infer U}` ? U : T;

type RemoveMapsFromObj<T> = {
  [K in keyof T as RemoveMaps<K>]: T[K];
};

type DesiredShape = RemoveMapsFromObj<ApiData>;
// type DesiredShape = {longitude:string,latitude:string}

/*
  notepad
*/

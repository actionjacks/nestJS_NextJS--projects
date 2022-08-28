/*
  intersection
  merge types. AB is extends A and B all params includes
*/
type A = { a: number; a2: number };
type B = { b: number; b2: string };
type AB = A & B;

/*
  union types
  C can be only A-type or B type
*/
type C = A | B;

/*
  type custom Guards
*/
type Animal = {
  name: string;
  fly?: boolean;
  run?: boolean;
};
type Dog = Pick<Animal, "run" | "name">;
type Bird = Pick<Animal, "fly" | "name">;

const canFly = (animal: Animal): animal is Bird => {
  return "fly" in animal;
};
const canFly2 = (animal: Animal): animal is Bird => {
  return typeof animal.fly !== "undefined";
};

/*
  type Literal Types
*/
type Move = "Rock" | "Paper" | "Scissor";

/*
  type Never
  only string can pass, difrent value throw error but dont brek app
*/
const throws = (): never => {
  throw new Error("this never returns");
};
const loops = (val: string): never | string => {
  return typeof val === "string" ? val : throws();
};

/*
  type index types
*/
type Duck = {
  colors: string;
  feathers: number;
};
type DuckProps = keyof Duck; // colors | feathers
type ColorType = Duck["colors"]; // string
type DuckValues = Duck[DuckProps]; //string | number

/*
  type Conditional Types
*/
type StringOrNumber<T> = T extends boolean ? string : number;

type T1 = StringOrNumber<true>; // string

type T2 = StringOrNumber<false>; // number
type T3 = StringOrNumber<Object>; // number

type TypeName<T> = T extends string
  ? "STRING"
  : T extends number
  ? "NUMBER"
  : T extends boolean
  ? "BOOLEAN"
  : T extends undefined
  ? "UNDEFIND"
  : T extends Function
  ? "FUNCTION"
  : "object";
type checkType = TypeName<string>;

/*
  type Infer - infer is return type using conditions
  if T extends empty array return never or if array got some types return this types 
*/
type ElementType<T> = T extends (infer U)[] ? U : never;
type T_ = ElementType<[]>; //never
type T_2 = ElementType<string[]>; //string

/*
  as argument get one type and return diffrent type
*/
interface RawPerson {
  indentyfier: number;
  first_name: string;
  last_name: string;
}
interface PersonFormRaw {
  id: string;
  fullName: string;
}
const tranformator = (raw: RawPerson): PersonFormRaw => {
  return {
    id: `${raw.indentyfier}`,
    fullName: `${raw.first_name} ${raw.last_name}`,
  };
};

/*
  strategy
*/
type Eagel = { kind: "eagle"; fly: () => "fly" };
type Duckk = { kind: "duck"; quack: () => "quack" };

type Animals = Eagel | Duckk;

const doSomething = (anim: Animals): string | never => {
  switch (anim.kind) {
    case "eagle":
      return anim.fly();
    case "duck":
      return anim.quack();

    default:
      return throws();
  }
};

/*
  derive types from constants
*/
const MOVES = {
  ROCK: { beats: "SCISSOR" },
  PAPER: { beats: "ROCK" },
};
type Move_ = keyof typeof MOVES;
const move: Move_ = "ROCK";

/*LITY TYPES
  maped readonly
*/
type Read<T> = { readonly [P in keyof T]: T[P] };
type Read2<T> = { [P in keyof T]?: T[P] | undefined };
type Read3<T> = { [P in keyof T]-?: T[P] }; //reguired

type DuckReadonly = Read<Duck>;
type DuckReadonly2 = Read2<Duck>; // or Partial<Duck>
type DuckReadonly3 = Read3<Duck>; // or Required<Duck>

/*
  Record
*/
type Day = "Monday" | "Thuesday";
type Everyday = Record<Day, "_">;

/*
  Filter
*/
type Filter<T, U> = T extends U ? T : never;
type TT = Filter<"a" | "b", "b">; // "b"

// second argument is element to keep
type TT2 = Extract<"a" | "b", "b">; // 'b
// second argument is element to remove
type TT3 = Exclude<"a" | "b", "b">; // 'a

/*
  Omit remove one type from type opposite of Pick
  Omit<Duck, 'feathers>
*/

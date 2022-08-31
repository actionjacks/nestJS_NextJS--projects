//https://ghaiklor.github.io/type-challenges-solutions/en/

// descriminetion Union
type USER = {
  id: number;
  firstName: string;
} & (
  | { role: "admin"; adminPassword: string }
  | { role: "user" }
  | { role: "super-admin"; superAdminPassword: string }
);
// zaleznie od property role mamy inne pola dostepne
// const Uszer: USER = {
//   id: 1,
//   firstName: "",
//   role: "user",
//   adminPassword: "s",
// };

//https://github.com/actionjacks/type-challenges/blob/main/questions/

/* _____________ Your Code Here _____________ */

type HelloWorld = string; // expected to be a string
/* _____________ Test Cases _____________ */
// import type { Equal, Expect, NotAny } from '@type-challenges/utils'

// type cases = [
//   Expect<NotAny<HelloWorld>>,
//   Expect<Equal<HelloWorld, string>>,
// ]

/* _____________ _____________ _____________ */
/*
  cusotm pick 
  type MyPick<T, K extends keyof T> = {[P in K]:T[P]}
  type Pick<T, K extends keyof T> = { [P in K]: T[P]; }
*/
type MyPickTen<T, K> = {
  // omit remove type from interface
  [P in keyof Omit<T, Exclude<keyof T, K>>]: T[P];
};

interface TestName {
  name: string;
}
type Fo = MyPickTen<TestName, "name">;

/* _____________ _____________ _____________ */
/*
    Readonly Maped
*/
type MyReadonly<T> = {
  readonly [Key in keyof T]: T[Key];
};

/* _____________ _____________ _____________ */

/*
  Tuple to Object
*/
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type SameValSameKey<T extends readonly any[]> = {
  [P in T[number]]: P;
};

type result = SameValSameKey<typeof tuple>;
// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

/*
   First of Array
*/
type First<T extends any[]> = T extends any[] ? T[0] : never;
type ReturnFirstTypeOfArray = First<[1, 2, 3]>;

/*
   Length of Tuple
*/
type tesla = ["tesla", "model 3", "model X", "model Y"];
type spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT"
];

type Length<T extends readonly any[]> = T extends any[] ? T["length"] : never;

type teslaLength = Length<tesla>; // expected 4
type spaceXLength = Length<spaceX>; // expected 5

/*
  Exclude - wykluczam

  So that when you are writing the construct T extends U where T is the union, actually what is happening is TypeScript iterates over the union T and applies the condition to each element.
*/
type MyExclude<T, U> = T extends U ? never : T;
type Result = MyExclude<"a" | "b" | "c", "a">; // 'b' | 'c'

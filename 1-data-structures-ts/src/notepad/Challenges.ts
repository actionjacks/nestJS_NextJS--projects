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

/*
  type Result = Concat<[1], [2]> // expected to be [1, 2]
*/
type MyConcat<T extends any[], U extends any[]> = [...T, ...U];
type UseMyConcat = MyConcat<[1, 2], [3, 4]>;

/*
  if true return first argument if not second
*/
type If<C extends boolean, T, F> = C extends true ? T : F;
type UseIF = If<false, "A", "B">;

/*
  return type from promise7
  If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type? For example if we have Promise<ExampleType> how to get ExampleType?
*/
type ExampleType<T> = T extends Promise<infer R>
  ? R extends Promise<infer P>
    ? P extends Promise<infer U>
      ? U
      : P
    : R
  : T;

type Awaited2<T> = T extends Promise<infer R> ? Awaited<R> : T;

type UseExampleType = ExampleType<Promise<string>>;
type UseExampleType2 = Awaited2<Promise<Promise<Promise<string>>>>;

/*
  Implement the JavaScript Array.includes function in the type system. A type takes the two arguments. The output should be a boolean true or false.

  //type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
*/
//work only in simple types
type isPillarMen<T extends unknown[], U> = U extends T[number] ? true : false;

type UseisPillarMen = isPillarMen<["Kars", "Esidisi", "Wamuu", "Santana"], "l">;

type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? First extends U
    ? true
    : Includes<Rest, U>
  : false;

type UseisPillarMen2 = Includes<
  [[{}], false, [1, true, 2], { a: "c" }],
  [1, true, 2]
>;

/*
  Implement the generic version of Array.push
  For example:
  type Result = Push<[1, 2], '3'> // [1, 2, '3']
*/
type Pusher<T extends unknown[], U extends unknown> = [...T, U];
type usePusher = Pusher<[1, 2], "2">;

/*
  Implement the type version of Array.unshift
  For example:
  type Result = Unshift<[1, 2], 0> // [0, 1, 2,]
*/
type UnshiftAr<T extends unknown[], U extends unknown> = [U, ...T];

/*
  Implement the built-in Parameters generic without using it.
  For example:
  const foo = (arg1: string, arg2: number): void => {}
  type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]

  same as 
  type SumParams = Parameters<typeof sum>;
*/
type ReturnParamsFromFu<T extends (...arg: any[]) => any> = T extends (
  ...arg: infer P
) => any
  ? P
  : never;

const foo_ = (arg1: string, arg2: number): void => {};
type Fofofo = ReturnParamsFromFu<typeof foo_>;

/*
  Get Return Type
  const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}
type a = MyReturnType<typeof fn> // should be "1 | 2"
*/
const fn = (v: boolean) => (v ? 1 : 2);

type MyReturnType<T> = T extends (...arg: any[]) => infer P ? P : never;
type useMyReturnType = MyReturnType<typeof fn>;

/*
  Omit
  interface Todo {
  title: string
  description: string
  completed: boolean
}
  type TodoPreview = MyOmit<Todo, 'description' | 'title'>
  const todo: TodoPreview = {
    completed: false,
  } 
*/
// myomit przyjmuje dowolny generyk , u musi byc jego kluczem
// mapuj nowy obiekt K jest kluczem generyka,
// as czy K jest jak u? nie zwracaj nic lub zwroc klucz jak
//https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#key-remapping-in-mapped-types
type MyOmit<T, U extends keyof T> = {
  [K in keyof T as K extends U ? never : K]: T[K];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type usemyOmit = MyOmit<Todo, "completed">;

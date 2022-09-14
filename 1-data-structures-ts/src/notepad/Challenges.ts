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

type UseisPillarMen = isPillarMen<
  ["Kars", "Esidisi", "Wamuu", "Santana"],
  "Kars"
>;

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
  REturn Type
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

/*
    ReadOnly 
    Implement a generic MyReadonly2<T, K> which takes two type argument T and K.
    K specify the set of properties of T that should set to Readonly. When K is not provided, it should make all properties readonly just like the normal Readonly<T>.
*/

type MyReadonly2<T extends object, U extends keyof T> = T & {
  readonly [Key in U]: T[Key];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type Foooo = MyReadonly2<Todo, "completed">;

const todo: MyReadonly2<Todo, "title"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

// Deep Readonly
type X = {
  x: {
    a: 1;
    b: "hi";
  };
  y: "hey";
};

type DeepReadOnly<T extends object> = {
  readonly [K in keyof T]: T[K] extends Record<string, unknown>
    ? DeepReadOnly<T[K]>
    : T[K];
};
type useDeepReadonly = DeepReadOnly<X>;
//-------------------------------------------------------
type DeepReadOnlyObject<T> = keyof T extends never
  ? T
  : { readonly [k in keyof T]: DeepReadOnlyObject<T[k]> };

type useDeepReadonly_ = DeepReadOnlyObject<X>;

/*
  TUPLE TO UNION
  type Arr = ['1', '2', '3']
  type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
*/
type Arr = ["1", "2", "3"];
type TupleToUnion<T> = T extends (infer TFromArr)[] ? TFromArr : never;

type useTupleToUnion = TupleToUnion<Arr>;
//  T extends (...arg: any[]) => infer P ? P : never;

/*
  chainable options
*/
type Chainable<O = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<O & { [P in K]: V }>;
  get(): O;
};

type Chainable2<O = {}> = {
  option<K extends string, V>(
    key: K extends keyof O ? (V extends O[K] ? never : K) : K,
    value: V
  ): Chainable<Omit<O, K> & { [P in K]: V }>;
  get(): O;
};
//T extends (...arg: any[]) => infer P ? P : never;
declare const config: Chainable;

const result2 = config
  .option("foo", 123)
  .option("name", "type-challenges")
  .option("bar", { value: "Hello World" })
  .get();

// expect the type of result to be:
interface Result2 {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}

/*
Variadic Tuple Types

  type arr1 = ["a", "b", "c"];
  type arr2 = [3, 2, 1];

  type tail1 = Last<arr1>; // expected to be 'c'
  type tail2 = Last<arr2>; // expected to be 1
*/
///type First<T extends any[]> = T extends any[] ? T[0] : never;
type arr1 = ["a", "b", "c"];
const myTuple = [1, 2, 3, 4] as const;

type LastFromArray<T extends any[]> = T extends [...infer First, infer Last]
  ? Last
  : never;
type UseLastFromArray = LastFromArray<arr1>;

type OnlyRest<T extends readonly any[]> = T extends readonly [
  infer Firs,
  ...infer Rest
]
  ? Rest
  : never;
type UseOnlyRest = OnlyRest<typeof myTuple>;

type POOP<T extends readonly any[]> = T extends readonly [
  ...infer Firs,
  infer Rest
]
  ? Firs
  : never;
type UsePOOP = POOP<typeof myTuple>;

/*
  Promise.all

  Type the function PromiseAll that accepts an array of PromiseLike objects, the returning value should be Promise<T> where T is the resolved result array.
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });

  // expected to be `Promise<[number, 42, string]>`
  const p = PromiseAll([promise1, promise2, promise3] as const)
*/
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T]
): Promise<{ [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P] }>;

const p = PromiseAll([promise1, promise2, promise3] as const);

/*
  Type lookup
  
*/
interface CAT {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface DOG {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type Animal_ = CAT | DOG;

type LookUp<T extends Animal_, U extends Animal_["type"]> = T extends {
  type: U;
}
  ? T
  : never;

type MyDogType = LookUp<Animal_, "cat">; // expected to be `Dog`

/*
 Trim Left
  Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.
  For example
  type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
*/
type Whitespace = " " | "\n" | " ";

type TrimLEFT<T extends string> = T extends `${Whitespace}${infer U}`
  ? TrimLEFT<U>
  : T;
type useTrimLeft = TrimLEFT<" hhhh ">;

type TrimRIGHT<T extends string> = T extends `${infer U}${Whitespace}`
  ? TrimRIGHT<U>
  : T;
type useTrimRight = TrimRIGHT<" hhhh ">;

type TrimALL<T extends string> = T extends `${Whitespace}${infer U}`
  ? TrimALL<U>
  : T extends `${infer U}${Whitespace}`
  ? TrimALL<U>
  : T;
type useTrimALL = TrimALL<" hhhh ">;

/*
  Capitalize
*/
type Capitalizator<T extends string> = `${Uppercase<T>}`;
type UseCapitalizator = Capitalizator<"sasax">;

interface CapitalizedChars {
  f: "F";
}
type Capitaliz<S> = S extends `${infer C}${infer T}`
  ? `${C extends keyof CapitalizedChars ? CapitalizedChars[C] : C}${T}`
  : S;

type useCapitalize = Capitaliz<CapitalizedChars>;

/*
  Replace
  //type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'
*/

type Replacer<
  TItem extends string,
  From extends string,
  To extends string
> = From extends ""
  ? TItem // types ... (are)  ... fun
  : TItem extends `${infer L}${From}${infer R}`
  ? `${L}${To}${R}`
  : TItem;

type useReplacer = Replacer<"types are fun", "are", "dupa">;

/*
  Replace all
  type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'
*/
type ReplaceAll<
  TItem extends string,
  From extends string,
  To extends string
> = From extends ""
  ? TItem // types ... (are)  ... fun
  : TItem extends `${infer L}${From}${infer R}`
  ? ReplaceAll<`${L}${To}${R}`, From, To>
  : TItem;

type useReplaceAll = ReplaceAll<"t y p e s", " ", "">;

/* 
  Append Argument
  type Fn = (a: number, b: string) => number

  type Result = AppendArgument<Fn, boolean> 
  // expected be (a: number, b: string, x: boolean) => number
*/

type Fn = (a: number, b: string) => number;

type AppendArgument<T extends Fn, R> = T extends (a: infer P, b: infer O) => any
  ? (a: P, b: O, x: R) => string
  : never;

type ResultFunction = AppendArgument<Fn, boolean>;

type AppendArgument2<Fn, A> = Fn extends (...args: [...infer P]) => infer R
  ? // get multiple arg from function use tuple ...args:[a:number,b:number]
    (...args: [...P, A]) => R
  : never;

type ResultFunction2 = AppendArgument2<Fn, boolean>;

/*
Permutation
  type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

  type Permutation<T> = T extends never ? [] : [T];
        it will loop all passed values
*/
type Permutation<T, C = T> = [T] extends [never]
  ? []
  : C extends infer U
  ? [U, ...Permutation<Exclude<T, U>>]
  : [];

type UsePermutation = Permutation<"A" | "B" | "C">;

/*
  Length of String
  do drogiego argumetu wsadzamy pojedyncza litere ze stringa i na koniec sptawdzamy dlugosc tej tablicy i ja zwracamy
*/
type StringLenght<
  T extends string,
  counter extends string[]
> = T extends `${infer C}${infer T}`
  ? StringLenght<T, [C, ...counter]>
  : counter["length"];

type UseStringLenght = StringLenght<"lorem", []>;

/*
  Flatten
    type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
*/

type Flatten<T> = T extends []
  ? []
  : T extends [infer H, ...infer T]
  ? [...Flatten<H>, ...Flatten<T>]
  : [T];

type useFlatten = Flatten<[1, 2, [3, 4], [[[5]]]]>;

/*
type SameValSameKey<T extends readonly any[]> = {
  [P in T[number]]: P;
};
  APPEND to OBject
  type Test = { id: "1" };
  type Result = AppendToObject<Test, "value", 4>; // expected to be { id: '1', value: 4 }
*/

type Test = { id: "1" };

type Appender<Obj, KeyTo extends string, ValTo> = {
  [K in keyof Obj | KeyTo]: K extends keyof Obj ? Obj[K] : ValTo;
};

type UseAppender = Appender<Test, "value", 4>;

/*
  Absolute
  type Test = -100;
  type Result = Absolute<Test>; // expected to be "100"
*/
type Test_ = -100;

type AbsoluteO<T extends number | string | bigint> =
  // `${T}` = change T to string
  //  extends `-${infer N}` = if extends - return type N (100)
  `${T}` extends `-${infer N}` ? N : `${T}`;

type useAbsoluteO = AbsoluteO<Test_>;

/*
  String to Union
    type Test = '123';
    type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
*/
type Test__ = "123";

type StringToUnion<T extends string> =
  `${T}` extends `${infer A}${infer B}${infer C}` ? A | B | C : never;

type useStringToUnion = StringToUnion<Test__>;

type StringToUnion2<T extends string> = T extends `${infer A}${infer B}`
  ? A | StringToUnion2<B>
  : never;

type useStringToUnion2 = StringToUnion2<Test__>;

/*
  Merge 2 Objects
  type foo = {
    name: string;
    age: string;
  }
  type coo = {
    age: number;
    sex: string
  }
  type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}
*/
type foo2 = {
  name: string;
  age: string;
};
type coo2 = {
  age: number;
  sex: string;
};

type MergeObjects<T, U> = {
  [K in keyof T | keyof U]: K extends keyof T ? T[K] : U;
};
type useMergeObjects = MergeObjects<foo2, coo2>;

type MergeObject2<T, U> = {
  [K in keyof T | keyof U]: K extends keyof T
    ? T[K]
    : K extends keyof U
    ? U[K]
    : never;
};
type useMergeObjects2 = MergeObject2<foo2, coo2>;

/*
  KebabCase
  `FooBarBaz` -> `foo-bar-baz`
*/
type KebabCase_<T> = T extends `${infer First}${infer Last}`
  ? Last extends Uncapitalize<Last>
    ? `${Uncapitalize<First>}${KebabCase_<Last>}`
    : `${Uncapitalize<First>}-${KebabCase_<Last>}`
  : T;

type UseKebabCase = KebabCase_<"FooBarBaz">;

/*
  DIF
    Get an `Object` that is the difference between `O` & `O1`
*/
type Foo111 = {
  name: string;
  age: string;
};
type Bar222 = {
  name: string;
  age: string;
  gender: number;
};
type Coo333 = {
  name: string;
  gender: number;
};
type MyDifff<FirstObj extends object, SecObje extends object> = {
  [Key in keyof FirstObj | keyof SecObje as Exclude<
    Key,
    keyof FirstObj & keyof SecObje
  >]: Key extends keyof FirstObj
    ? FirstObj[Key]
    : Key extends keyof SecObje
    ? SecObje[Key]
    : never;
};

type useDifff = MyDifff<Coo333, Bar222>;

/*
  AnyOf
    Implement Python liked any function in the type system. A type takes the Array and returns true if any element of the Array is true. If the Array is empty, return false.
    type Sample1 = AnyOf<[1, '', false, [], {}]> // expected to be true.
    type Sample2 = AnyOf<[0, '', false, [], {}]> // expected to be false.
*/
type Falsy = 0 | "" | false | [] | { [P in any]: never };

// [...infet] - first element from array. ...infer Last - rest elements from array
type AnyOf<Iitem extends readonly any[]> = Iitem extends [
  infer F,
  ...infer Last
]
  ? // if first elemnt (infered) is === Falsy check again or return true
    F extends Falsy
    ? AnyOf<Last>
    : true
  : false;

type useAnyOf = AnyOf<[1, {}, false, true]>;

/*
  IsNever
*/
type IsNever<T> = [T] extends [never] ? true : false;

type A_ = IsNever<never>; // expected to be true
type B_ = IsNever<undefined>; // expected to be false
type C_ = IsNever<null>; // expected to be false
type D_ = IsNever<[]>; // expected to be false
type E_ = IsNever<number>; // expected to be false

/*
  ISUnion
*/
type IsUnion<T, C = T> = T extends C ? ([C] extends [T] ? false : true) : never;

type case1 = IsUnion<string>; // false
type case2 = IsUnion<string | number>; // true
type case3 = IsUnion<[string | number]>; // false

/*
  ReplaceKeys
*/
type NodeA = {
  type: "A";
  name: string;
  flag: number;
};
type NodeB = {
  type: "B";
  id: number;
  flag: number;
};
type NodeC = {
  type: "C";
  name: string;
  flag: number;
};

type Nodes = NodeA | NodeB | NodeC;

type ReplaceKeys<Node extends Nodes, To extends string, From> = {
  [Key in keyof Node]: Key extends To
    ? Key extends keyof From
      ? From[Key]
      : never
    : Node[Key];
};

type ReplacedNodes = ReplaceKeys<
  Nodes,
  "name" | "flag",
  { name: number; flag: string }
>; // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

type ReplacedNotExistKeys = ReplaceKeys<Nodes, "name", { aa: number }>; // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never

/*
  Remove Index Signature
  type Foo = {
  [key: string]: any;
  foo(): void;
}
  type A = RemoveIndexSignature<Foo>  // expected { foo(): void }
*/

type FooFooFoo = {
  [key: string]: any;
  foo(): void;
};

type TypeLiteralOnly<T> = string extends T
  ? never
  : number extends T
  ? never
  : symbol extends T
  ? never
  : T;

type RemoveIndexSignature<T> = { [P in keyof T as TypeLiteralOnly<P>]: T[P] };

type useRemoveIndexSignature = RemoveIndexSignature<FooFooFoo>; // expected { foo(): void }

type RemoveIndexSignature2<T> = {
  [Key in keyof T as Key extends `${infer R}` ? Key : never]: T[Key];
};

type useRemoveIndexSignature2 = RemoveIndexSignature2<FooFooFoo>; // expected { foo(): void }

/*
  Percentage Parser

  Implement PercentageParser. According to the /^(\+|\-)?(\d*)?(\%)?$/ regularity to match T and get three matches.
  The structure should be: [plus or minus, number, unit] If it is not captured, the default is an empty string.
*/
type ParseSign<T extends string> = T extends `${infer S}${any}`
  ? S extends "+" | "-"
    ? S
    : ""
  : "";

type ParsePercent<T extends string> = T extends `${any}%` ? "%" : "";

type ParseNumber<T extends string> =
  T extends `${ParseSign<T>}${infer N}${ParsePercent<T>}` ? N : "";

type PercentageParser<A extends string> = [
  ParseSign<A>,
  ParseNumber<A>,
  ParsePercent<A>
];

type PString1 = "";
type PString2 = "+85%";
type PString3 = "-85%";
type PString4 = "85%";
type PString5 = "85";

type R1 = PercentageParser<PString1>; // expected ['', '', '']
type R2 = PercentageParser<PString2>; // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3>; // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4>; // expected ["", "85", "%"]
type R5 = PercentageParser<PString5>; // expected ["", "85", ""]

/*
  Drop Char
  Drop a specified char from a string.
  type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
*/
type DropChar<
  T extends string,
  U extends string
> = T extends `${infer F}${U}${infer G}` ? DropChar<`${F}${G}`, U> : T;

type Butterfly = DropChar<" b u t t e r f l y ! ", " ">;

/*
  MinusOne
  Given a number (always positive) as a type. Your type should return the number decreased by one.
  For example:
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
*/

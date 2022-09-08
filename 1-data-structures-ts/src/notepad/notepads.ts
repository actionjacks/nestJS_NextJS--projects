const fo = (val: { name: string } | { age: number }) => {
  if ("name" in val) {
    console.log(val.name);
    return;
  }
  val.age;
};

const someData = {
  id: 123,
  name: "jacek",
  placel: "placel",
};
//create interface type to pass typeof someObject
type SomeData = typeof someData;
// create keys of type SomeData
type SomeDataKeys = keyof SomeData;
//get value type of typedObject
type SomeDataValue = SomeData["id"];

type Flatten<T> = T extends Array<infer R> ? R : T;
type ArrayFlatten = Flatten<1>; //infer wnioskowanie zwracanego typu
import fetch from "node-fetch";
//jesli generic jest typem Array wnioskuj jego typ jesli nie zwracaj same przekazany typ

/*
  generic React Prop
    funkcja <Type> 
    wywolanie funkcji
    funkcja<Type>() <--wywolanie
*/
// interface TableProps<TItem> {
//   items: TItem[];
//   renderItem: (item: TItem) => React.ReactNode;
// }

import { argv } from "process";
import { T } from "ramda";

// export const Table=<TItem>(props:TableProps<TItem>)=>{
//   return null
// }

// export const Component = ()=>{
//   return (
//     <Table
//       items={[{id:'1'}]}
//       renderItem={(item) => {
//         return null
//       }}>
//     </Table>
//   )
// }

/*
  Variadic tuples

*/
type PersonProp<T extends unknown[]> = [string, ...T, number];
type ProfesionProp = PersonProp<[string]>;

const [name, prof, age]: ProfesionProp = ["", "", 1];

function tail<T extends any[]>(arr: readonly [any, ...T]) {
  const [_ignored, ...rest] = arr;
  return rest;
}

const myTuple = [1, 2, 3, 4] as const;
const r1 = tail(myTuple); //[2, 3, 4];

type OnlyRest<T extends readonly any[]> = T extends readonly [
  infer Firs,
  ...infer Rest
]
  ? Rest
  : never;
type UseOnlyRest = OnlyRest<typeof myTuple>;

/*
  Obj[key]
*/
interface Letters {
  a: number;
  b: string;
  c: {
    name: string;
  };
}
type LetterValues = Letters[keyof Letters];

const Obj1 = {
  fo: { a: 1, b: "1" },
};

const Obj2 = {
  foo: {
    a: true,
    b: 2,
  },
  bar: {
    c: "sss",
    d: 12,
  },
};

type IndexType<T> = { [key: string]: T };

const get = <TItem>(ob: IndexType<TItem>, key: string) => {
  return ob[key];
};

const dooo = get(Obj1, "fo");

const getVal = <TObj, Key extends keyof TObj>(obj: TObj, key: Key) => {
  return obj[key];
};
const getV = getVal(Obj1, "fo");

/*
  Obj[key][key]
*/
const getDeepVal = <
  TObj,
  TFirstKey extends keyof TObj,
  TSecondKey extends keyof TObj[TFirstKey]
>(
  obj: TObj,
  firstKey: TFirstKey,
  secondKey: TSecondKey
) => {
  return obj[firstKey][secondKey];
};

const kek = getDeepVal(Obj2, "foo", "a");

/*
  API Response
*/
//yarn add zod
// import {z} from 'zod'
// const Data = z.object({
//   id: z.string(),
//   name: z.string()
// })

// type DataType = z.infer<typeof Data>

// fetch('/sss')
//   .then((res)=>res.json())
//   .then((result)=> {
//     const data = Data.parse(result)
//   })

interface FunctionInterface {
  (item: string): string;
}

/*
  Union Types
*/
type Person_ = {
  [anykey: string]: string | number;
};
const benny: Person_ = {
  age: 12,
  dupa: "",
  // dupa2:true // error
};

/*
  Condition Types
*/
type Animal = {
  name: string;
};
type Human = {
  firstName: string;
  lastName: string;
};

type GetRequiredInformation<TType> = TType extends Animal
  ? { age: number } & Animal
  : { socialSecurityNumber: number } & Human;

export type RequiredInfomrationForAnimal = GetRequiredInformation<Animal>;
export type RequiredInfomrationForHuman = GetRequiredInformation<Human>;

/*
  Error Message
*/
export const deepEqualCompare = <Arg>(
  a: Arg extends any[] ? "Dont pass an array" : Arg,
  b: Arg
): boolean => {
  return a === b;
};

//deepEqualCompare([], []);
deepEqualCompare(1, 1);

/*
  Infer typescript
*/
type ArrayTypeOrType<T> = T extends (infer R)[] ? R : T;
type Fo = ArrayTypeOrType<2>;
/*
We check if our generic Type is the array
If it is array extract the real type from it
If it does not leave it as is
*/
type Unpromisify<T> = T extends Promise<infer R> ? R : T;
type Fo2 = Unpromisify<Promise<true>>;
/*
We check if type extends Promise
If it does we extract the type from the promise
If it does not leave it as is
*/
type QueteJob<Q extends String, P> = {
  quetue: Q;
  payload: P;
};

type WelcomeEmail = { to: string; body: string };

type ProcessPayment = {
  userName: string;
  accout: number;
};

type WelcomeEmailJob = QueteJob<"email", WelcomeEmail>;
type ProcessPaymentJom = QueteJob<"batch", ProcessPayment>;

type QuetueName<J extends QueteJob<string, unknown>> = J extends QueteJob<
  infer N,
  unknown
>
  ? N
  : never;

type EmailQuetu = QuetueName<WelcomeEmailJob>;
type ProcessPaymentQuetu = QuetueName<ProcessPaymentJom>;

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer A
) => any
  ? A
  : never;

type MyParameters_ = MyParameters<(a: number) => "">;

type CaptureReturnType<T> = T extends (...arg: any[]) => infer R ? R : never;
type Type_ = CaptureReturnType<() => 1>;

/*
   predicate type
*/
function PrintName<T extends { name: string }>(obj: T) {
  return obj.name;
}
PrintName({ name: "jacek" });

interface Admin {
  admin: string;
}
interface User {
  user: string;
}

// const checkIfisAmin_ = (obj: Admin | User): obj is Admin => {
//   return (obj as Admin).admin !== "undefind";
//   //  return "admin" in obj; - same
// };

const checkIfisAmin_ = (obj: Admin | User): obj is Admin => {
  return (obj as Admin).admin !== "undefind";
  //  return "admin" in obj; - same
};

const foooooo = checkIfisAmin_({ admin: "ss" });

interface Cat {
  numberOfLives: number;
}
interface Dog {
  isAGoodBoy: boolean;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return typeof (animal as Cat).numberOfLives === "number";
  //  return "numberOfLives" in animal
}
const isString_ = (type: unknown): type is string => typeof type === "string";

/*
  if(isCat({numberOfLives:2})){
    //
    return
  }
  return
*/

/*
   Conditional types
*/
interface WithId {
  id: string;
}
// extends - daje gwarancje że typ T musi posiadać propertę id która jest stringiem
class Playlist<T extends WithId> {
  items: T[] = [];

  removeFromPlaylist(idToRemove: string) {
    this.items = this.items.filter((item) => item.id !== idToRemove);
  }
}
const fo_ = new Playlist<{ brandName: ""; id: "" }>();

type FileTypes = "mp3" | "mp4" | "pdf" | "zip" | "png" | "gif";

type FilterMediaFileTypes<T> = T extends FileTypes ? T : never;
type FillMediaType = FilterMediaFileTypes<"mp3">;

type FilterMediaFileTypes2<T> = T extends "mp3" | "mp4" ? T : never;
type FillMediaType2 = FilterMediaFileTypes2<FileTypes>;
const filemedia: FillMediaType2 = "mp3"; //autocomplite mp3 or mp4

type Song = { filename: string; type: "mp3"; play: () => void };
type VideoClip = { filename: string; type: "mp4"; play: () => void };
type CoverArt = { filename: string; type: "png"; downland: () => void };

function play<T extends Song | VideoClip>(fileToPlay: T) {
  fileToPlay.play();
}
//or ---------------------
type PlayerFile = Song | VideoClip | CoverArt;
type Playable<T> = T extends { play: () => void } ? T : never;

function play_(fileToPlay: Playable<PlayerFile>) {
  fileToPlay.play();
}

type Firstt<T extends any[]> = T extends any[] ? T[0] : never;
type ReturnFirstTypeOfArray = Firstt<[1, 2, 3]>;

/*
   Maped types
*/
type USer = { [Key in "username" | "email"]: string }; //loop and create type
type ReadOnlyUSer = { readonly [Key in keyof USer]: string };

type ReadOnlyUSer2<T> = { readonly [Key in keyof T]: string };
type UseGenericUSer = ReadOnlyUSer2<USer>;

const Kek: USer = { email: "", username: "" };

//same keys same values
const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type First<T extends readonly any[]> = {
  [P in T[number]]: P;
};
type result = First<typeof tuple>;
// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

/*
  typed FETCH
*/
interface HttpResponse<T extends ResponseData | ProblemData> {
  data: T;
  status: number;
}

type ResponseData = {
  data: string[];
};
type ProblemData = {
  data: null;
};

class CheckResponse {
  private data: unknown = {};

  constructor(data: unknown) {
    this.data = data;
  }

  private hasResponseData(data: unknown): data is ResponseData {
    return (data as ResponseData).data !== null;
  }

  getData(): ResponseData | ProblemData {
    if (this.hasResponseData(this.data)) {
      return this.data;
    }
    return {
      data: null,
    };
  }
}

async function getJson<TExpected>(
  url: string
): Promise<HttpResponse<ResponseData | ProblemData>> {
  const response = await fetch(url);
  const data = await response.json();

  const responseData = new CheckResponse(data).getData();

  if (responseData.data !== null) {
    return {
      data: responseData,
      status: 201,
    };
  }
  return {
    data: responseData,
    status: 404,
  };
}

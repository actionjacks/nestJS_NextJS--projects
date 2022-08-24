const fo = (val: { name: string } | { age: number }) => {
  if ("name" in val) {
    console.log(val.name);
    return;
  }
  val.age;
};

/*
  generic React Prop
*/
// interface TableProps<TItem> {
//   items: TItem[];
//   renderItem: (item: TItem) => React.ReactNode;
// }

import { argv } from "process";

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

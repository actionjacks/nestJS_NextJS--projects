/*
  generic React Prop
*/
// interface TableProps<TItem> {
//   items: TItem[];
//   renderItem: (item: TItem) => React.ReactNode;
// }

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
  ? { age: number }
  : { socialSecurityNumber: number };

export type RequiredInfomrationForAnimal = GetRequiredInformation<Animal>;

export type RequiredInfomrationForHuman = GetRequiredInformation<Human>;

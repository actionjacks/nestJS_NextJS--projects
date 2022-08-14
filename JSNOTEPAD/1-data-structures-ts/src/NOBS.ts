function simpleState(initial: string): [() => string, (v: string) => void] {
  let str = initial;
  return [
    () => str,
    (v: string) => {
      str = v;
    },
  ];
}

const [name, setName] = simpleState("jacek");
console.log(name); //'jacek'
setName("dupa");
console.log(name); //'dupa'

/*
  Generic whit KEYOF
*/
function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[],
  key: KeyType
): DataType[KeyType][] {
  return items.map((el) => el[key]);
}

const dogs = [{ name: "foo", age: 12 }];
console.log(pluck(dogs, "name"));

interface BaseEvent {
  time: number;
  user: string;
}
interface EventMap {
  addToChart: BaseEvent & { quanity: number; productId: string };
  checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
  name: Name,
  data: EventMap[Name]
) {
  console.log([name, data]);
}

/*
  Utili types
*/
type BaseEvent_Optional = Partial<BaseEvent>;
type BaseEvent_TakeTime = Pick<BaseEvent, "time">;

sendEvent("addToChart", {
  quanity: 12,
  time: 0,
  user: "jacek",
  productId: "12",
});

interface User {
  name: string;
  age: number;
}
const mapByName = (users: User[]): Record<string, Omit<User, "name">> => {
  return users.reduce((acc, record) => {
    const { name, ...other } = record;
    return { ...acc, [name]: other };
  }, {});
};
/*
  Enums and overload
*/
enum LoadingState {
  beforeLodad = "beforeLoda",
  loading = "loading",
  loaded = "loaded",
}
const englishLoadingState = {
  [LoadingState.beforeLodad]: "Before Load",
};
const isLoading = (state: LoadingState) => state === LoadingState.loading;

//OVERLOAD
function send(name: "productId", data: { productid: number }): void;
function send(name: "chekout", data: { cartCount: number }): void;

function send(name: string, data: unknown): void {
  console.log(data, name);
}
const foo = send("productId", { productid: 12 });
const foo2 = send("chekout", { cartCount: 12 });

/*
  ReadOnly
*/
function makeReadOnlyCordinate(
  x: number,
  y: number
): readonly [number, number] {
  return [x, y];
}
const cord = makeReadOnlyCordinate(2, 3);
// cord[0]= 1 //err read-only property
const realConst = [1, 2, 3] as const;
// realConst[0]= 1 //err read-only property

/*
  Classes
*/
interface Databse<T, K> {
  get(id: K): T;
  set(id: K, value: T): void;
}

type DBKeyType = string | number | symbol;

interface Persistable {
  saveToString(): string;
  resotoreFromString(storedState: string): void;
}
//private - can acces only in this class
//protected - can acces in class who extend base class
//static - can use method or acces property no need to create new instace of class
class InMemoryDatabse<T, K extends DBKeyType> implements Databse<T, K> {
  protected db: Record<K, T> = {} as Record<K, T>;

  get(id: K): T {
    return this.db[id];
  }
  set(id: K, value: T): void {
    this.db[id] = value;
  }
}

class PersistentMemoryDb<T, K extends DBKeyType>
  extends InMemoryDatabse<T, K>
  implements Persistable
{
  saveToString(): string {
    return JSON.stringify(this.db);
  }
  resotoreFromString(storedState: string): void {
    this.db = JSON.parse(storedState);
  }
}

const myDB = new PersistentMemoryDb<string, string>();
myDB.set("12", "jacek");

const myDB2 = new PersistentMemoryDb<string, number>();
myDB2.set(1, "12");

//
class Doggy {
  constructor(public name: string, public age: number) {}
}
const rino = new Doggy("kaka", 125);
//
class DogList {
  private doogies: Doggy[] = [];
  static instance: DogList = new DogList(); // acces class by property instance, static mean no need to make new class to acces this class

  private constructor() {} // can make only 1 instance of class

  static addDog(dog: Doggy) {
    DogList.instance.doogies.push(dog);
  }
  getDogs() {
    return this.doogies;
  }
}
DogList.addDog(rino);
console.log(DogList.instance.getDogs());

/*
  Maps Types
*/
type MyFlexibleDogInfo = {
  name: string;
  [key: string]: string | number;
};

const dog: MyFlexibleDogInfo = {
  name: "jacek",
  dupa: "12", // in interface declare structore and can add multiple values
  dupa12: 12, //becouse map [key:string]: string | number
};

interface JackInfo {
  name: string;
  age: number;
}
const JackInformation: JackInfo = {
  name: "jacek placek",
  age: 25,
};

type OptionalFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type Jack = OptionalFlags<JackInfo>;
/*type Jack = {
    name: boolean;
    age: boolean;
}*/

type Listener<Type> = {
  [Property in keyof Type as `on${Capitalize<string & Property>}Change`]: (
    newValue: Type[Property]
  ) => void;
} & {
  [Property in keyof Type as `on${Capitalize<string & Property>}Delete`]?: (
    newValue: Type[Property]
  ) => void;
};

function listenToObject<T>(obj: T, listener: Listener<T>): void {
  throw "needs to be";
}

type checkListenerType = Listener<JackInfo>;
/*
type checkListenerType = {
    onNameChange: (newValue: string) => void;
    onAgeChange: (newValue: number) => void;
}
*/

listenToObject(JackInformation, {
  onNameChange: (v: string) => {},
  onAgeChange: (v: number) => {},
});

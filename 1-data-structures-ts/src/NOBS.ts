import fetch from "node-fetch";

// closure
const fooo = (val: number) => {
  return (num: number) => val + num;
};
const useFoo = fooo(2);
console.log(useFoo(1)); // out 3

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
  Generic
*/
function genericSimpleState<T>(initial: T): [() => T, (val: T) => void] {
  let str = initial;
  return [
    () => str,
    (v: T) => {
      str = v;
    },
  ];
}

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}
function ranker<RankItem>(
  items: RankItem[],
  rank: (val: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));
  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
}
interface Pokemon {
  name: string;
  hp: number;
}
const pokemon: Pokemon[] = [
  { name: "Pokemon", hp: 20 },
  { name: "Rajczu", hp: 23 },
];

ranker(pokemon, ({ hp }) => hp);

const [name_, setName_] = genericSimpleState<string | null>(null);

/*
  Optional
*/
interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function sendEmail(user: User) {
  if ("email" in user) {
    return user.info?.email;
  } //or
  user?.info?.email ?? "";
  return "";
}

function sendOptionalCallback(callback?: () => void) {
  return callback?.();
}
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

const mapByID = (
  users: { id: number; name: string }[]
): Record<string, { id: number; name: string }> => {
  return users.reduce((a, v) => {
    return {
      ...a,
      [v.id]: v,
    };
  }, {});
};

interface Name {
  firstName: string;
  lastName: String;
}
function printFullName(name: Name): Name & { fullName: string } {
  return {
    ...name,
    fullName: `${name.firstName} ${name.lastName}`,
  };
}
// type of any function is (...args:any[])=>any
function permuteRows<T extends (...args: any[]) => any>(
  iteratorFunc: T,
  data: Parameters<T>[0][]
): ReturnType<T>[] {
  return data.map(iteratorFunc);
}
permuteRows(printFullName, [{ firstName: "jacek", lastName: "dupa" }]); //[{ firstName: "jacek", lastName: "dupa", fullName: 'jacek dupa' }]

class PermuteRows_ {
  constructor(public name: Name) {}

  get fullName() {
    return `${this.name.firstName} ${this.name.lastName}`;
  }
}

function createObject<T extends new (...args: any[]) => any>(
  ObjectType: T,
  data: ConstructorParameters<T>[0][]
): InstanceType<T>[] {
  return data.map((item) => new ObjectType(item));
}

createObject(PermuteRows_, [{ firstName: "jacek", lastName: "dupa" }]); //[{ firstName: "jacek", lastName: "dupa", fullName: 'jacek dupa' }]
/*
  Enums
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
 Absteact Classes
*/
abstract class StreetFighter {
  move() {}
  fight() {
    console.log(`attack whit ${this.getSepecialAttac}`);
  }
  abstract getSepecialAttac(): string;
  abstract get name(): string;
}

class Ryu extends StreetFighter {
  getSepecialAttac(): string {
    return "Hadooken";
  }
  get name(): string {
    {
      return "Ryu";
    }
  }
}

/*
 mixin Classes
*/
function CreateSimpleMemoryDatabase<T>() {
  return class myLogFunction {
    private db: Record<string, T> = {};
    set(id: string, value: T) {
      this.db[id] = value;
    }
    get(id: string): T {
      return this.db[id];
    }
    getObject(): object {
      return this.db;
    }
  };
}

const StringDatabse = CreateSimpleMemoryDatabase<string>();
const nevDb = new StringDatabse();
nevDb.set("12", "jacek");

type Constructor<T> = new (...args: any[]) => T;

//mixin
function Dumpable<
  T extends Constructor<{
    getObject(): object; // mean class passed here need got method getObject and return object
  }>
>(Base: T) {
  return class Dumpable extends Base {
    dump() {
      console.log(this.getObject());
    }
  };
}

const StringDatabseUsingDupable = Dumpable(StringDatabse);
const nevDb_ = new StringDatabseUsingDupable();
nevDb_.set("12", "jacek");
nevDb_.dump();

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

// Property in keyof Type is interface JackInfo `name`
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

type MappTypeFunc<T> = {
  [Dupa in keyof T as `map${Capitalize<string & Dupa>}`]?: (
    data: T[Dupa]
  ) => T[Dupa];
};

interface SomeInterface {
  name: string;
  age: 120;
}

type foo_ = MappTypeFunc<SomeInterface>;

/*
  Conditional Types
*/
interface PokemonResult {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}
type FetchPokemonResult<T> = T extends undefined
  ? Promise<PokemonResult[]>
  : void;
// jesli T FetchPokemonResult<T> jesli T jest typem undefind to zwraca promise albo void
function fetchPokemon<T extends undefined | ((value: unknown) => void)>(
  url: string,
  callback?: T
): FetchPokemonResult<T> {
  if (callback) {
    fetch(url)
      .then((resp) => resp.json())
      .then(callback);
    return undefined as FetchPokemonResult<T>;
  }
  return fetch(url).then((resp) => resp.json()) as FetchPokemonResult<T>;
}
// fetchPokemon('htttp',(data)=>data.result.forEach((pokemon)=>  ))

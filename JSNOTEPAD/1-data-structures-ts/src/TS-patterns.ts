//loader from file
import * as fs from "fs";

export interface RecordHandler<T> {
  addRecord(record: T): void;
}

export function loader<T>(
  fileName: string,
  recordHandler: RecordHandler<T>
): void {
  const data: T[] = JSON.parse(fs.readFileSync(fileName).toString());
  data.forEach((record) => recordHandler.addRecord(record));
}
// ------------------------

//OBSERVER
type Listener<EventType> = (event: EventType) => void;

function createObserver<EventType>(): {
  subscribe: (listener: Listener<EventType>) => () => void;
  publish: (event: EventType) => void;
} {
  let listeners: Listener<EventType>[] = [];

  return {
    subscribe: (listener: Listener<EventType>): (() => void) => {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter((l) => l !== listener);
      };
    },
    publish: (event: EventType) => {
      listeners.forEach((l) => l(event));
    },
  };
}

//FACTORY
interface Pokemon {
  id: string;
  attack: number;
  defense: number;
}

interface BaseRecord {
  id: string;
}

interface BeforeSetEvent<T> {
  value: T;
  newValue: T;
}

interface AfterSetEvent<T> {
  value: T;
}

interface DataBase<T extends BaseRecord> {
  set(newValue: T): void;
  get(id: string): T | undefined;

  onBeforeAdd(listener: Listener<BeforeSetEvent<T>>): () => void;
  onAfterAdd(listener: Listener<AfterSetEvent<T>>): () => void;

  //VISITOR PATTER
  visit(visitor: (item: T) => void): void;
  //STRATEGY Pattern
  selectBest(scoreStrategy: (item: T) => number): T | undefined;
}

function createDatabse<T extends BaseRecord>() {
  class InMemoryDatabase implements DataBase<T> {
    //db is private to acces this outside class need set and get
    private db: Record<string, T> = {};

    //Singleton - only one instance of the class (static no need to create class to acces properties or methods)
    static instance: InMemoryDatabase = new InMemoryDatabase();

    private beforeAddListeners = createObserver<BeforeSetEvent<T>>();
    private afterAddListeners = createObserver<AfterSetEvent<T>>();

    private constructor() {}

    public set(newValue: T): void {
      this.beforeAddListeners.publish({
        newValue,
        value: this.db[newValue.id],
      });

      this.db[newValue.id] = newValue;

      this.afterAddListeners.publish({
        value: newValue,
      });
    }

    public get(id: string): T | undefined {
      return this.db[id];
    }

    onBeforeAdd(listener: Listener<BeforeSetEvent<T>>): () => void {
      return this.beforeAddListeners.subscribe(listener);
    }
    onAfterAdd(listener: Listener<AfterSetEvent<T>>): () => void {
      return this.afterAddListeners.subscribe(listener);
    }

    //VISITOR PATTER
    visit(visitor: (item: T) => void): void {
      Object.values(this.db).forEach(visitor);
    }

    //Strategy pattern
    selectBest(scoreStrategy: (item: T) => number): T | undefined {
      const found: {
        max: number;
        item: T | undefined;
      } = {
        max: 0,
        item: undefined,
      };

      Object.values(this.db).reduce((f, item) => {
        const score = scoreStrategy(item);
        if (score >= f.max) {
          f.max = score;
          f.item = item;
        }
        return f;
      }, found);

      return found.item;
    }
  }

  return InMemoryDatabase;
}

const PokemonDB = createDatabse<Pokemon>();

const unsubscribe = PokemonDB.instance.onAfterAdd(({ value }) => {
  console.log(value);
});

PokemonDB.instance.set({
  id: "Pikaczu",
  attack: 44,
  defense: 1,
});
PokemonDB.instance.set({
  id: "Magmar",
  attack: 14,
  defense: 41,
});

unsubscribe();

const getPikaczu = PokemonDB.instance.get("Pikaczu");

//VISITOR PATTER
PokemonDB.instance.visit((item) => {
  console.log(item.id);
});

//Strategy pattern
const bestDefensive = PokemonDB.instance.selectBest(({ defense }) => defense);

//========================
// Adapter pattern
class PokemonDBAdapter implements RecordHandler<Pokemon> {
  addRecord(record: Pokemon) {
    PokemonDB.instance.set(record);
  }
}
//loader("./data.json", new PokemonDBAdapter());

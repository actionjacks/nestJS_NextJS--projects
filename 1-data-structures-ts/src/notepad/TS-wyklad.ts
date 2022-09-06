const objReadOnly = {
  a: "a",
} as const;

//objReadOnly.a = a //err Cannot assign to 'a' because it is a read-only property.
const objReadOnly2 = {
  a: "a",
};
objReadOnly2.a = "B";

type genericFunction = <Argument>(arg: Argument) => Argument;

//some generic type and extend id
function Table<Item extends { id: number }>(
  data: Item[],
  renderItem: (item: Item) => void
) {
  return data.map((item) => {
    return {
      id: item.id,
      view: renderItem(item),
    };
  });
}

interface Env {
  NODE_ENV: "production" | "stagg";
  PORT: number;
}
const envValue: Env = {
  NODE_ENV: "production",
  PORT: 0,
};

const argu = "PORT";
type xx = Env[typeof argu];

function getConfig(key: keyof Env): Env[typeof key] {
  return "production"; // or number from PORT
}

function getConfig2<Key extends keyof Env>(key: Key): Env[Key] {
  return envValue[key];
}

const resu = getConfig2("PORT");

//jesli T jest typu Promise sprawdz mi zwracany (infer) typ i mi go zwroc
type PromiseVal<T> = T extends Promise<infer R> ? R : never;
type PromiseReturnedVal = PromiseVal<Promise<number>>;

type DeepReadonly<T> = T extends Array<infer R>
  ? ReadonlyArray<R>
  : T extends object
  ? {
      readonly [Key in keyof T]: DeepReadonly<T[Key]>;
    }
  : T;

const obj = { a: 3, c: { b: 2 } };
type UseDeep = DeepReadonly<typeof obj>;

type HttpMEthod = "GET" | "POST";

interface Paths {
  pathDefinitions: {
    "/orders": {
      GET: {
        requestQuery: string;
        response: string;
      };
      POST: {
        requestQuery: number;
        response: string;
      };
    };
    "/pic": {
      GET: {
        requestQuery: string;
        response: string;
      };
      POST: {
        requestQuery: number;
        response: string;
      };
    };
  };
}

// function doFetch<
//   Path extends keyof Paths["pathDefinitions"],
//   Method extends keyof Paths["pathDefinitions"][Path]
// >(
//   path: Path,
//   method: Method
// ): Paths["pathDefinitions"][Path][Method] extends {
//   response: infer Response;
// }
//   ? Response
//   : null {
//   const re = doFetch("/orders", "GET");
//   return { response: "" };
// }

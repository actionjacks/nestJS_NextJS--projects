//generic
const namesArray: Array<string> = [];

enum Users {
  ADMIN,
  USER,
}
enum Users2 {
  ADMIN = "administarator",
  USER = "uzytkownik",
}

const StringExampleObject = {
  ADMIN: "click",
  EVENT: "change",
} as const;

let unknownType: unknown = "text";
if (typeof unknownType === "string") {
  unknownType.split(",");
}
//!!
type Addjtion = (firs?: number | string, sec?: number | string) => number;
//!!

//uni typ
const additem: Addjtion = (firs = 0, sec = 0) => {
  const a = typeof firs === "number" ? firs : Number(firs);
  const b = typeof sec === "number" ? sec : Number(sec);
  return a + b;
};

const inputs = document.querySelectorAll<HTMLInputElement>("imputy");

type UserS = {
  name: string;
  age: number;
};
const someArrayUsers: UserS[] = [];
someArrayUsers.forEach((user) => {
  if ("age" in user) {
    console.log("jest");
  }
});

type UserType = "jacek" | "mistrz";
type UserType2 = "karol" | "mis";

const obj1: UserType = "jacek";
const obj2: UserType2 = "mis";
//obj1 = obj2; Cannot assign to 'obj1' because it is a constant.ts(2588)

type AccessMode = 1 | 2 | 3;

type Bo1 = {
  comon: string;
  comon2: number;
};
type Bol2 = {
  comon: string;
};
function showCommonProp(object: Bo1 | Bol2) {
  object.comon;
}

//generic

function getAndReturn<T>(item: T) {
  return item;
}
getAndReturn("dupa");
getAndReturn(1);

///----------------------------------------------------------------------
type JSframeworks = "React" | "Angular" | "Vue";
type BackendFrameworks = "nextjs" | "Symfony" | ".Net";

type Employee = {
  firstName: string;
  lastName: string;
  age: number;
  pesel: number;
};

type FronTendDev = {
  frontendFramwork: JSframeworks;
} & Employee;

type BackEndDev = {
  backendFramwork: BackendFrameworks;
} & Employee;

//generic-interface
interface Collection<T> {
  devs: Array<T>;
  addDev(newDev: T): void;
  getDev(pesel: number): T | null;
  removeDev(pesel: number): void;
  update(pesel: number, newData: T): void;
}
//no generic
interface FrontendDevCollection {
  devs: FronTendDev[];
  addDev(newDev: FronTendDev): void;
  getDev(pesel: number): FronTendDev | null;
  removeDev(pesel: number): void;
  update(pesel: number, newData: JSframeworks): void;
}

class EmployerDatabse<T extends { pesel: number }> implements Collection<T> {
  devs: Array<T> = [];

  addDev(newDev: T): void {
    this.devs.push(newDev);
  }

  getDev(pesel: number) {
    return this.devs.find((dev) => dev.pesel === pesel) ?? null;
  }

  removeDev(pesel: number) {
    return this.devs.filter((dev) => dev.pesel !== pesel);
  }

  update(pesel: number, newData: T): void {
    this.devs = this.devs.map((dev) => {
      if (dev.pesel === pesel) {
        return { ...dev, ...newData };
      }

      return dev;
    });
  }
}

const fontendDevsDatabse = new EmployerDatabse<FronTendDev>();
fontendDevsDatabse.addDev({
  firstName: "jacek",
  lastName: "placek",
  age: 28,
  pesel: 123123123,
  frontendFramwork: "Vue",
});

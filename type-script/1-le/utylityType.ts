type Person = {
  name: string;
  lastName: string;
  id: number;
};
const jacek = {
  id: 0,
  name: "jacek",
  lastName: "dupa",
};
//make properites optional odwrotnością jest Required<Person>
//required sprawia że opcjonalne stają się wymagane
function updatePerson(id: number, name: Partial<Person>) {}

const newName = {
  name: "jacek-placek",
};

updatePerson(0, newName);

const place: Readonly<Person> = {
  name: "placek",
  lastName: "kurakao",
  id: 2,
};
//place.id = 2;//Cannot assign to 'id' because it is a read-only property

//RECORD
type Key = "obj1" | "obj2" | "obj3";
type MyObjType = Record<Key, Person>;

const mynewObjKey: MyObjType = {
  obj1: { id: 0, name: "jacek", lastName: "dupa" },
  obj2: { id: 0, name: "jacek", lastName: "dupa" },
  obj3: { id: 0, name: "jacek", lastName: "dupa" },
};

//PICK
type Person2 = {
  name: string;
  lastName: string;
  id: number;
  age: number;
};
//dzieki PICK mozna mutowac tylko właciwość podaną w kluczy np "name" z type Person2
function updateUserName(id: number, personToUpdateName: Pick<Person2, "name">) {
  personToUpdateName.name;
}
//OMIT przeciwienstwo PICK wybieramy wlasciwosc do ktorej nie ma dostepy
function updatePerson2(id: number, personToUpdateName: Omit<Person2, "id">) {
  personToUpdateName.lastName;
  //cant acces id
}

//EXCLUDE
type Frameworks = "React" | "Angular" | "Vue" | "nextjs" | "Symfony" | ".Net";

type FrontendTechnologioes = Exclude<Frameworks, "Vue">; //wywalamy

//Extract
type JacekDev = "Vue";

//bieże 2 typy i można przypisać mu tylko wspolne wlasciwosci da 2 argumentu
const newFrontendDev: Extract<Frameworks, JacekDev> = "Vue";

//PARAMETERS - wymagane kolejnosc musi byc zastosowana
//wykożystanie tupli
function someFunction(age: number, id: number, name: string) {
  console.log(age, id, name);
}
type SomeFunction = Parameters<typeof someFunction>;

const parametersRequired: SomeFunction = [1, 2, "kace"];

someFunction(...parametersRequired);
//to samo można zrobić wyciagajac parametry z konctrukutora klasy

class ProprtyToGive {
  constructor(public age: number, public id: number) {}
}
type GetClassParameters = ConstructorParameters<typeof ProprtyToGive>;

//GENERIC !!

function update<T, V>(firstObj: T, secObj: V): T & V {
  return { ...firstObj, ...secObj };
}

class Planet<T> {
  constructor(private slosestStar: T) {}
}
const sun = new Planet<string>("Sun");

const sun2 = new Planet<{ name: string; distance: number }>({
  name: "kakao",
  distance: 12,
});

interface Custom<T> {
  name: string;
  dupa: T;
}

const kaka: Custom<number> = {
  name: "jaja",
  dupa: 1,
};

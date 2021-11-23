import { ListTemplate } from "./classes/ListTemplate";
import { Invoice } from "./classes/Invoice";
import { HasFormatter } from "./interfaces/HasFormatter";
//#region 1
let docOne: HasFormatter;

docOne = new Invoice("jacek", "lorem", 20);
let docs: HasFormatter[] = [];
docs.push(docOne);

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const toForm = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  //tuple
  let values: [string, string, number];
  values = [toForm.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === "invoice") {
    //
    doc = new Invoice(...values);
  }
});
//#endregion
//generic
const addUid = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};
let docOnew = addUid({ name: "jacek", age: 1 });

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}
const docThree: Resource<object> = {
  uid: 1,
  resourceName: "person",
  data: { name: "jacek" },
};
const docFout: Resource<string[]> = {
  uid: 2,
  resourceName: "shoppingList",
  data: ["mil", "roll"],
};

//enums
interface Resource2<T> {
  uid: number;
  resourceName: ResourceType;
  data: T;
}
enum ResourceType {
  BOOK,
  AUTHOR,
}
const docFout3: Resource2<string[]> = {
  uid: 2,
  resourceName: ResourceType.BOOK,
  data: ["mil", "roll"],
};

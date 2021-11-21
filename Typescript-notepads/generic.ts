type mynewType = Array<string>;

//T - generic type
// or same result const last = <T>(arr: T[])=>{}
const last = <T>(arr: Array<T>) => {
  return arr[arr.length - 1];
};
const l = last([1, 2, 3]);
const l2 = last(["1", "2", "3"]);

//----------------------
//                   default is number
const makeArr2 = <T, Y = number>(x: T, y: Y) => {
  return [x, y];
};
const makeArr = <T, Y>(x: T, y: Y) => {
  return [x, y];
};

const v = makeArr("1", "2");
const v2 = makeArr(1, 2);
const v3 = makeArr(1, "2");

//function return object T need fistname and last name
const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + " " + obj.lastName,
  };
};

const jacek = makeFullName({
  firstName: "jacek",
  lastName: "zab",
  from: "was",
});

interface Tab<T> {
  id: string;
  position: number;
  data: T;
}
type NumberTab = Tab<number>;
type StringTab = Tab<string>;

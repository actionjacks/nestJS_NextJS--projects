console.log("lorem ipsum 11111");

//preston is object
const person: { name: string; age: number } = {
  name: "jacek",
  age: 23,
};
person.name;
//----------------
interface personRef {
  name: string;
  age: number;
}
const person2: personRef = {
  name: "jacek",
  age: 23,
};
person2.name;
//-----------------tuple
const mytuple: {
  role: [number, string];
} = {
  role: [2, "author"],
};
//-----------------enum
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const registerUser = {
  role: Role.READ_ONLY,
};

if (registerUser.role === Role.READ_ONLY) {
  console.log("Read only");
}

//-----------------
type Mytype = number | string;

function combine(input1: Mytype, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

//-------------- funcion type
//combinevalues is function type and return number
let combineValues: () => number;
//combinevalues2 is function type and take 2 arguments number and return number
let combineValues2: (n: number, n2: number) => number;

//----------- never type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

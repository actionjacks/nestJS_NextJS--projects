interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinateFromObjec(obj: Coordinate): Coordinate;
function parseCoordinateFromObjec(str: string): Coordinate;
function parseCoordinateFromObjec(x: number, y: number): Coordinate;
function parseCoordinateFromObjec(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  };
  if (typeof arg1 === "string") {
    (arg1 as string).split(",").forEach((str) => {
      const [key, value] = str.split(":"); // 'x:12' 'y:12
      coord[key as "x" | "y"] = parseInt(value);
    });
  }
  if (typeof arg1 === "object") {
    coord = { ...(arg1 as Coordinate) };
  }
  coord = {
    x: arg1 as number, //   x: arg1 as Coordinate["x"],
    y: arg2 as number, //   y: arg2 as Coordinate["y"],
  };
  return coord;
}

const cordinates_ = parseCoordinateFromObjec("x:12,y:12");

function send(name: "productId", data: { productid: number }): void;
function send(name: "chekout", data: { cartCount: number }): void;

function send(name: string, data: unknown): void {
  console.log(data, name);
}
const foo = send("productId", { productid: 12 });
const foo2 = send("chekout", { cartCount: 12 });

/*
  overload function
*/
function overloadNumber(
  data: number[],
  callback: (data: number) => number
): number[];

function overloadNumber(
  data: number,
  callback: (data: number) => number
): number;

function overloadNumber(
  data: number | number[],
  callback: (data: number) => number
): number | number[] {
  return typeof data === "number" ? callback(data) : data.map(callback);
}

const useOverloadNumbers = overloadNumber(1, (num) => num * 20);
const useOverloadNumbers2 = overloadNumber([1, 2, 3, 4], (num) => num * 20);

/*
  overload arrow function
*/

type mutationFunction_ = (val: number) => number;

interface OverloadInArrowFuncion {
  (numbers: number[], callback: mutationFunction_): void;
  (numbers: number, callback: mutationFunction_): void;
}

function isNumber(
  checkTypeOfData: number | number[]
): checkTypeOfData is number {
  return typeof checkTypeOfData === "number";
}
const mutateNumbers: OverloadInArrowFuncion = (data, callback) => {
  return isNumber(data) ? callback(data) : data.map(callback);
};

const result_ = mutateNumbers(1, (num) => num + 2);
const result_2 = mutateNumbers([1, 2, 4], (num) => num + 2);

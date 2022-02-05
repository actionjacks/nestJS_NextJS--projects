//decorator
function assignId<T extends { new (...args: any[]): {} }>(classToDecorate: T) {
  return class extends classToDecorate {
    id: number;

    constructor(...args: any[]) {
      super(...args);

      this.id = Math.random();
    }
  };
}

@assignId
class Jackplacko {
  constructor(public name: string, age: number) {}
}

const jakplacko = new Jackplacko("jacek", 30);
console.log(jakplacko);
//=====================================
// function methods decorator
function minValue(value: number) {
  return function (
    target: Object,
    property: string,
    descriptor: PropertyDescriptor
  ) {
    const originalFunction = descriptor.value;

    const newFunction = function (this: Object, ...args: any[]) {
      console.log("przekazano do dekoratora:" + args);

      if (args.some((cordinates) => cordinates < 0)) {
        return console.log("bledne wartosci");
      }

      originalFunction.apply(args);
      console.log("po wywolaniu funkcji");
    };
    descriptor.value = newFunction;

    return descriptor;
  };
}

function protectMethod() {
  return function (
    target: Object,
    property: string, //to nazwa funcji
    descriptor: PropertyDescriptor
  ) {
    descriptor.writable = false;
    return descriptor;
  };
}
//
class Pointer {
  constructor(public x: number, public y: number) {}

  @protectMethod()
  @minValue(0)
  setPont(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  showPoints(): void {
    console.log(`x is ${this.x} y is ${this.y}`);
  }
}

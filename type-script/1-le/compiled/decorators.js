"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//decorator
function assignId(classToDecorate) {
    return class extends classToDecorate {
        constructor(...args) {
            super(...args);
            this.id = Math.random();
        }
    };
}
let Jackplacko = class Jackplacko {
    constructor(name, age) {
        this.name = name;
    }
};
Jackplacko = __decorate([
    assignId
], Jackplacko);
const jakplacko = new Jackplacko("jacek", 30);
console.log(jakplacko);
//=====================================
// function methods decorator
function minValue(value) {
    return function (target, property, descriptor) {
        const originalFunction = descriptor.value;
        const newFunction = function (...args) {
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
    return function (target, property, //to nazwa funcji
    descriptor) {
        descriptor.writable = false;
        return descriptor;
    };
}
//
class Pointer {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    setPont(x, y) {
        this.x = x;
        this.y = y;
    }
    showPoints() {
        console.log(`x is ${this.x} y is ${this.y}`);
    }
}
__decorate([
    protectMethod(),
    minValue(0)
], Pointer.prototype, "setPont", null);

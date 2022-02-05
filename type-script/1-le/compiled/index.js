"use strict";
//generic
const namesArray = [];
var Users;
(function (Users) {
    Users[Users["ADMIN"] = 0] = "ADMIN";
    Users[Users["USER"] = 1] = "USER";
})(Users || (Users = {}));
var Users2;
(function (Users2) {
    Users2["ADMIN"] = "administarator";
    Users2["USER"] = "uzytkownik";
})(Users2 || (Users2 = {}));
const StringExampleObject = {
    ADMIN: "click",
    EVENT: "change",
};
let unknownType = "text";
if (typeof unknownType === "string") {
    unknownType.split(",");
}
//!!
//uni typ
const additem = (firs = 0, sec = 0) => {
    const a = typeof firs === "number" ? firs : Number(firs);
    const b = typeof sec === "number" ? sec : Number(sec);
    return a + b;
};
const inputs = document.querySelectorAll("imputy");
const someArrayUsers = [];
someArrayUsers.forEach((user) => {
    if ("age" in user) {
        console.log("jest");
    }
});
const obj1 = "jacek";
const obj2 = "mis";
function showCommonProp(object) {
    object.comon;
}
//generic
function getAndReturn(item) {
    return item;
}
getAndReturn("dupa");
getAndReturn(1);
class EmployerDatabse {
    constructor() {
        this.devs = [];
    }
    addDev(newDev) {
        this.devs.push(newDev);
    }
    getDev(pesel) {
        var _a;
        return (_a = this.devs.find((dev) => dev.pesel === pesel)) !== null && _a !== void 0 ? _a : null;
    }
    removeDev(pesel) {
        return this.devs.filter((dev) => dev.pesel !== pesel);
    }
    update(pesel, newData) {
        this.devs = this.devs.map((dev) => {
            if (dev.pesel === pesel) {
                return Object.assign(Object.assign({}, dev), newData);
            }
            return dev;
        });
    }
}
const fontendDevsDatabse = new EmployerDatabse();
fontendDevsDatabse.addDev({
    firstName: "jacek",
    lastName: "placek",
    age: 28,
    pesel: 123123123,
    frontendFramwork: "Vue",
});

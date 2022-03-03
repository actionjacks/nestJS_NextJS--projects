"use strict";
const user = {
    firstName: "jacel",
    dupa: "kakalo",
};
const handler = {
    get(target, proprty) {
        return proprty === "fullName"
            ? `${target.firstName} ${target.dupa}`
            : target[proprty];
    },
};
const proxyUser = new Proxy(user, handler);
console.log(proxyUser.fullName);
//John Doe
const user2 = {
    firstName: "Place",
    lastName: "kak",
    age: 30,
};
const handler2 = {
    set(target, property, value) {
        if (property === "age") {
            if (typeof value !== "number") {
                throw new Error("age must be a number");
            }
            if (value < 18) {
                throw new Error("The user must be 18 or older.");
            }
        }
        target[property] = value;
    },
};
const proxyUser2 = new Proxy(user2, handler2);
proxyUser2.age = "fffd";
//Error: Age must be a number.
proxyUser2.age = "12";
//Error: The user must be 18 or older.
proxyUser2.age = 21;
//no error
const user3 = {
    firstName: "Place",
    lastName: "kak",
};
const getFullName = function (user) {
    return `${user.firstName} ${user.lastName}`;
};
const getFullNameProxy = new Proxy(getFullName, {
    apply(target, thisArg, args) {
        return target(...args).toUpperCase();
    },
});
console.log(getFullNameProxy(user3));
//PLACE KAK

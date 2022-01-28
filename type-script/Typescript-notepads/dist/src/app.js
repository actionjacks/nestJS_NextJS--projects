console.log("lorem ipsum 11111");
//preston is object
var person = {
    name: "jacek",
    age: 23,
};
person.name;
var person2 = {
    name: "jacek",
    age: 23,
};
person2.name;
//-----------------tuple
var mytuple = {
    role: [2, "author"],
};
//-----------------enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var registerUser = {
    role: Role.READ_ONLY,
};
if (registerUser.role === Role.READ_ONLY) {
    console.log("Read only");
}
function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
//-------------- funcion type
//combinevalues is function type and return number
var combineValues;
//combinevalues2 is function type and take 2 arguments number and return number
var combineValues2;
//----------- never type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
//# sourceMappingURL=app.js.map
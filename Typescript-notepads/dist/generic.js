var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//T - generic type
// or same result const last = <T>(arr: T[])=>{}
var last = function (arr) {
    return arr[arr.length - 1];
};
var l = last([1, 2, 3]);
var l2 = last(["1", "2", "3"]);
//----------------------
//                   default is number
var makeArr2 = function (x, y) {
    return [x, y];
};
var makeArr = function (x, y) {
    return [x, y];
};
var v = makeArr("1", "2");
var v2 = makeArr(1, 2);
var v3 = makeArr(1, "2");
//function return object T need fistname and last name
var makeFullName = function (obj) {
    return __assign(__assign({}, obj), { fullName: obj.firstName + " " + obj.lastName });
};
var jacek = makeFullName({
    firstName: "jacek",
    lastName: "zab",
    from: "was",
});
//# sourceMappingURL=generic.js.map
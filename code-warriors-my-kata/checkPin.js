function validatePIN(pin) {
  if ((typeof pin === "string" && pin.length === 4) || pin.length === 6) {
    let isNumber = /^\d+$/.test(pin);
    if (isNumber) {
      return true;
    } else return false;
  }

  if (pin > 0 && typeof pin === "number") {
    if (pin.toString().length === 4 || pin.toString().length === 6) {
      return true;
    } else return false;
  } else return false;
}
console.log(validatePIN("123456"));

//------------------best practice--------------------------
function validatePIN2(pin) {
  var pinlen = pin.length;
  var isCorrectLength = pinlen == 4 || pinlen == 6;
  var hasOnlyNumbers = pin.match(/^\d+$/);

  if (isCorrectLength && hasOnlyNumbers) {
    return true;
  }

  return false;
}
console.log(validatePIN2("123456"));

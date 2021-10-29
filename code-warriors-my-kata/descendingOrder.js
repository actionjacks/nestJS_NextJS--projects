// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(passedNumber) {
  let result = passedNumber
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");

  return parseInt(result);
}

const sortednumber = descendingOrder(987323124541);
console.log(sortednumber);

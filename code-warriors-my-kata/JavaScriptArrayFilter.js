function getEvenNumbers(numbersArray) {
  const evenNums = [];
  numbersArray.filter((num) => {
    if (num % 2 == 0) {
      evenNums.push(num);
    }
  });
  return evenNums;
}
console.log(getEvenNumbers([2, 4, 5, 6]));

//--------------best --------------
function getEvenNumbers2(numbersArray) {
  return numbersArray.filter(function (n) {
    return n % 2 == 0;
  });
}
console.log(getEvenNumbers2([2, 4, 5, 6]));

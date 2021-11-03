//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//For example:

//summation(2) -> 3
//1 + 2;

var summation = function (num) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum = sum + i + 1;
  }
  return sum;
};
console.log(summation(3));

//---best practice---
var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }

  return result;
};

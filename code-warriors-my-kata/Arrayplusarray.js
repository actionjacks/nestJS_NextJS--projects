function arrayPlusArray(arr1, arr2) {
  const sumOfArr1 = arr1.reduce((a, b) => {
    return a + b;
  });
  const sumOfArr2 = arr2.reduce((a, b) => {
    return a + b;
  });
  return sumOfArr1 + sumOfArr2;
}
console.log(arrayPlusArray([1, 3, 4, 5, 6], [1, 2, 3, 4]));

//--------------best practice -----------
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

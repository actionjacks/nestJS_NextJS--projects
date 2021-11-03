function makeNegative(num) {
  if (num === 0) return num;
  const isNegative = Math.sign(num);

  if (isNegative !== -1) {
    return -Math.abs(num);
  } else return num;
}
console.log(makeNegative(-10));

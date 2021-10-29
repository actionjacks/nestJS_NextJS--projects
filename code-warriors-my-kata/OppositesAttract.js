function lovefunc(flower1, flower2) {
  const firstFlower = flower1 % 2 === 0;
  const secondFlower = flower2 % 2 === 0;
  if ((firstFlower && !secondFlower) || (!firstFlower && secondFlower)) {
    return true;
  } else return false;
}

console.log(lovefunc(4, 4));

//best practices
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

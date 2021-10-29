class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

const newArray = new SmallestIntegerFinder();
console.log(newArray.findSmallestInt([2, 4, 5, 6, 7, 8, 5]));

// const sheeps = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];
// function countSheeps(arrayOfSheep) {
//   let counter = 0;

//   arrayOfSheep.filter((item) => {
//     if (item) {
//       counter++;
//     }
//   });

//   return counter;
// }

// console.log(countSheeps(sheeps));

const sheeps = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
function countSheeps(arrayOfSheep) {
  let counter = 0;
  arrayOfSheep.filter((i) => {
    if (i) {
      counter++;
    }
  });
  return counter;
}

console.log(countSheeps(sheeps));

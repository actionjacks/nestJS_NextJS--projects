//promise get two arguments
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("wszystko ok");
  }, 2500);
});

myPromise
  .then((result) => {
    console.log("zadanie skonczone", result);
  })
  .catch((err) => {
    console.log("o nie cos poszlo nie tak", err);
  });

function boilWater() {
  console.log("pazonko kawki");
}

(async () => {
  await boilWater(); //the code works on the promise will be resolved in the future
})();

function doMyJob(hours) {
  return new Promise((resolve, reject) => {
    if (hours > 8) {
      reject(new Error("za dlugie godziny pracy !!"));
    } else {
      setTimeout(() => {
        resolve();
      }, hours * 1000);
    }
  });
}
function pay() {
  return new Promise((resolve) => resolve());
}
//run promise
doMyJob(13)
  .then(() => {
    console.log("zadanie skonczone");
    return pay();
  })
  .then(() => console.log("wyplata poszla"))
  .catch((err) => console.log("za duza ilosc godzin", err));

//run promise async awiat
(async () => {
  try {
    await doMyJob(13);
    console.log("zadanie skonczone");
    //code stop run when resolved
    await pay();
    console.log("wyplata poszla");
  } catch (e) {
    console.log("BŁAD", e);
  }
})();

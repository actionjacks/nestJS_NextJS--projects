// / --- Plik myHeroes.js ---
const heroes = [];

function addItem(hero) {
  heroes.push(hero);
}

function getItems() {
  return heroes;
}

// Eksport danych które mają być dostępne poza modułem.
// Wszystko co chcemy udostępnić z tego modułu "podpinamy" pod "module.exports"
module.exports = {
  addHero: addItem,
  getHero: getItems,
};

// --- Plik heroUtils.js ---
const myHeroes = require("./myHeroes"); // import publicznych danych z myHeroes.js

myHeroes.addHero("Superman");
myHeroes.addHero("Batman");
myHeroes.addHero("Rumcajs");

console.log(myHeroes.getHero()); // ["Superman", "Batman", "Rumcajs"]
console.log(myHeroes.heroes); // undefined

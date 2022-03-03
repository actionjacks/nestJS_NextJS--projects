// ** IIFE */
(function () {
  // Zmienne i funkcje prywatne.
  // Brak dostępu do tej części poza modułem (poza IIFE)

  return {
    // Zmienne i funkcje publiczne - API naszego modułu.
    // Poprzez metody zwracane z modułu możemy modyfikować dane prywatne
  };
})(); // natychmiastowe wywołanie funkcji

const myHeroes = (function () {
  // prywatne zmienne
  const heroes = [];

  // zwrócony obiekt będzie publiczny
  // i dostępny dla innych modułów
  return {
    addHero: function (hero) {
      heroes.push(hero);
    },
    getHero: function () {
      return heroes;
    },
  };
})(); // natychmiastowe wywołanie funkcji

myHeroes.addHero("Superman");
myHeroes.addHero("Batman");
myHeroes.addHero("Rumcajs");
console.log(myHeroes.getHero()); // ["Superman", "Batman", "Rumcajs"]
console.log(myHeroes.heroes); // undefined

///-----------------------revealing module patter
const myHeroes = (function () {
  // prywatne zmienne i metody
  const heroes = [];

  function addItem(hero) {
    heroes.push(hero);
  }

  function getItems() {
    return heroes;
  }

  // zwrócony obiekt będzie publiczny
  // i dostępny dla innych modułów
  return {
    addHero: addItem,
    getHero: getItems,
  };
})(); // natychmiastowe wywołanie funkcji

myHeroes.addHero("Superman");
myHeroes.addHero("Batman");
myHeroes.addHero("Rumcajs");
console.log(myHeroes.getHero()); // ["Superman", "Batman", "Rumcajs"]
console.log(myHeroes.heroes); // undefined

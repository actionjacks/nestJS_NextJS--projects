/* --- Singleton --- */
const AppConfig = (function () {
  let config; // prywatna wartość, która zostanie zainicjowana tylko raz

  function initializeConfiguration(initData) {
    // funkcja konstruktora
    this.randomNumber = Math.random();
    initData = initData || {};
    this.number = initData.number || 5;
  }

  // publiczna część singletonu - API modułu
  return {
    getConfig: function (values) {
      // inicjujemy singleton tylko jeden raz
      if (config === undefined) {
        config = new initializeConfiguration(values);
      }
      // przy kolejnych wywołaniach zawsze zwracamy już te same dane
      return config;
    },
  };
})();

const configObject = AppConfig.getConfig({ number: 8 });
console.log(configObject); // patrz zdjęcie poniżej

const configObject2 = AppConfig.getConfig({ number: 1 });
console.log(configObject2); // patrz zdjęcie poniżej

console.log(configObject.config); // undefined
console.log(config); // ERROR

class AppConfig {
  constructor(number = 5) {
    if (AppConfig.exists) {
      return AppConfig.instance;
    }
    this.randomNumber = Math.random();
    this.number = number;
    AppConfig.exists = true;
    AppConfig.instance = this;
    return this;
  }
}

const configObject = new AppConfig(8);
const configObject2 = new AppConfig(1);

console.log(configObject);
console.log(configObject2);
console.log(configObject === configObject2); // true

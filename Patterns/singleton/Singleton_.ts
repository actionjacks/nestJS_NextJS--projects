//as function
const GlobalConfig = (() => {
  let config: void;

  function initialize(initData: { number: number }) {
    const randomNumber: number = Math.random();
    initData = initData || {};
    const number = initData.number || 5;
  }

  return {
    getConfig: (values: { number: number }): Function => {
      if (config === undefined) {
        config = initialize(values);
      }
      return config as unknown as Function;
    },
  };
})();

const configObject = GlobalConfig.getConfig({ number: 3 });

//as class
class AppConfig {
  value!: number;
  randomVal!: number;

  static instance: AppConfig;
  static exists: boolean;

  constructor(public number: number = 1) {
    if (AppConfig.exists) {
      return AppConfig.instance;
    }
    this.value = number;
    this.randomVal = Math.random();

    AppConfig.exists = true;
    AppConfig.instance = this;
    return this;
  }
}
const configObject_ = new AppConfig(8);
const configObject2_ = new AppConfig(1);

console.log(configObject_);
console.log(configObject2_);
console.log(configObject_ === configObject2_); // true

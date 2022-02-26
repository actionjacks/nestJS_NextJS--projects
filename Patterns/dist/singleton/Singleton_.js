"use strict";
//as function
const GlobalConfig = (() => {
    let config;
    function initialize(initData) {
        const randomNumber = Math.random();
        initData = initData || {};
        const number = initData.number || 5;
    }
    return {
        getConfig: (values) => {
            if (config === undefined) {
                config = initialize(values);
            }
            return config;
        },
    };
})();
const configObject = GlobalConfig.getConfig({ number: 3 });
//as class
class AppConfig {
    constructor(number = 1) {
        this.number = number;
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

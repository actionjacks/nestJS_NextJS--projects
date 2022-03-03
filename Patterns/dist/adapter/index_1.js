"use strict";
class Engine2 {
    simpleInterface() {
        console.log("Engine 2.-");
    }
}
class NewEngine10 {
    complicatedInterface() {
        console.log("Super turbo new API 10.-");
    }
}
class EngineAdapter {
    constructor(engine) {
        this.engine = engine;
    }
    simpleInterface() {
        this.engine.complicatedInterface();
    }
}

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

class EngineAdapter implements Engine2 {
  constructor(public engine: NewEngine10) {}

  simpleInterface() {
    this.engine.complicatedInterface();
  }
}

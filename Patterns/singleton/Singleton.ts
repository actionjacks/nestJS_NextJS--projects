class Singleton {
  numProcess: boolean = false;
  phManager: any;

  constructor() {}

  processManager = () => {
    this.numProcess = true;
  };

  createProcessManager = () => {
    this.phManager = this.processManager();
    return this.phManager;
  };
}

"use strict";
class Singleton {
    constructor() {
        this.numProcess = false;
        this.processManager = () => {
            this.numProcess = true;
        };
        this.createProcessManager = () => {
            this.phManager = this.processManager();
            return this.phManager;
        };
    }
}

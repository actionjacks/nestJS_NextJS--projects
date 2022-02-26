"use strict";
class Settings {
    constructor() {
        this.settinsObj = null;
        this.get = (key) => {
            if (!this.settinsObj) {
                return;
            }
            return this.settinsObj[key];
        };
        if (Settings.exists) {
            return Settings.instance;
        }
        this.settinsObj = {
            background: "#ff0000",
            version: Math.random(),
        };
        Object.freeze(this.settinsObj);
        Settings.exists = true;
        Settings.instance = this;
        return this;
    }
}

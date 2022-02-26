class Settings {
  settinsObj: null | SettingObj = null;

  static instance: Settings;
  static exists: boolean;

  constructor() {
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

  get = (key: settingKeys) => {
    if (!this.settinsObj) {
      return;
    }
    return this.settinsObj[key];
  };
}

type settingKeys = "background" | "version";
type SettingObj = {
  background: string;
  version: number;
};

export class ObjectConfigReader {
  constructor(settingsObject) {
    this.settings = settingsObject;
  }

  get(settingGroup, settingName) {
    return this.settings[settingGroup][settingName];
  }
}

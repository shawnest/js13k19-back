import { initKeys, bindKeys } from "kontra";

class InputManager {
  constructor() {
    initKeys();
  }

  on(key, callback) {
    bindKeys(key, callback);
  }
}

export default InputManager;

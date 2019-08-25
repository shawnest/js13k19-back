import { initKeys, bindKeys } from "kontra";

class InputManager {
  constructor() {
    initKeys();
  }

  onKeyPressed(key, callback) {
    bindKeys(key, callback);
  }
}

export default InputManager;

import { Sprite } from "kontra";

class BasicSprite extends Sprite.class {
  setScale(x, y) {
    this.width = this.width * x;
    this.height = y ? this.height * y : this.height * x;
  }
}

export default BasicSprite;

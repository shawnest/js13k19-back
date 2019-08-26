import kontra from "kontra";
import { SCALE_RATIO, GAMEPLAY } from "../configs/game-config";
import degreesToRadian from "../utilities/math";
import BasicSprite from "./basic";

class Player extends BasicSprite {
  constructor(properties) {
    super(properties);

    this.setScale(SCALE_RATIO);
  }

  update() {
    if (kontra.keyPressed("left")) {
      this.rotation += -2;
    }
    if (kontra.keyPressed("right")) {
      this.rotation += 2;
    }
    if (kontra.keyPressed("up")) {
      this.showFlame = true;
      if (this.flameTimeout) {
        clearTimeout(this.flameTimeout);
      }
      this.flameTimeout = setTimeout(() => {
        this.showFlame = false;
      }, GAMEPLAY.FLAME_TIMEOUT);
    }
  }

  render() {
    this.context.fillStyle = this.color;
    const halfHeight = this.height / 2;
    const halfWidth = this.width / 2;

    this.context.save();

    this.context.translate(this.x, this.y);
    this.context.rotate(degreesToRadian(this.rotation));

    this.context.beginPath();
    this.context.lineTo(halfWidth, halfHeight);
    this.context.lineTo(0, -this.height);
    this.context.lineTo(-halfWidth, halfHeight);
    this.context.closePath();
    this.context.fill();

    if (this.showFlame) {
      this.context.beginPath();
      this.context.fillStyle = GAMEPLAY.FLAME_COLOR;
      this.context.moveTo(-halfWidth, halfHeight);
      this.context.lineTo(halfWidth, halfHeight);
      this.context.lineTo(0, this.height);
      this.context.lineTo(-halfWidth, halfHeight);
      this.context.fill();
      this.context.closePath();
    }

    this.context.restore();
  }
}

export default Player;

import kontra from "kontra";
import { SCALE_RATIO } from "../configs/game-config";
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
    } else if (kontra.keyPressed("right")) {
      this.rotation += 2;
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
    this.context.restore();
  }
}

export default Player;

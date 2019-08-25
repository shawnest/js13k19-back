import BasicSprite from "./basic";
import { SCALE_RATIO } from "../configs/game-config";

class Player extends BasicSprite {
  constructor(properties) {
    super(properties);

    this.setScale(SCALE_RATIO);
  }

  render() {
    this.context.fillStyle = this.color;

    const halfHeight = this.height / 2;
    const halfWidth = this.width / 2;

    this.context.resetTransform();
    this.context.translate(this.x, this.y + halfHeight);
    this.context.lineTo(halfWidth, halfHeight);
    this.context.lineTo(0, -this.height);
    this.context.lineTo(-halfWidth, halfHeight);

    this.context.fill();
  }
}

export default Player;

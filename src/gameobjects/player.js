import kontra from "kontra";
import { SCALE_RATIO, GYRO_SUPPORTED } from "../configs/game-config";
import degreesToRadian from "../utilities/math";
import BasicSprite from "./basic";

class Player extends BasicSprite {
  constructor(properties) {
    super(properties);

    this.setScale(SCALE_RATIO);
    this.setControls();
  }

  setControls() {
    this.controls = null;
    if (GYRO_SUPPORTED) {
      window.addEventListener(
        "deviceorientation",
        event => {
          this.event = event;
        },
        true
      );
      this.controls = () => {
        if (this.event) {
          this.rotation = this.event.gamma;
        }
      };
    } else {
      this.controls = () => {
        if (kontra.keyPressed("left")) {
          this.rotation += -2;
        }
        if (kontra.keyPressed("right")) {
          this.rotation += 2;
        }
      };
    }
  }

  update() {
    this.controls();
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

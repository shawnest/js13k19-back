import kontra from "kontra";
import { SCALE_RATIO, GAMEPLAY, PHYSICS } from "../configs/game-config";
import degreesToRadian from "../utilities/math";
import BasicSprite from "./basic";

class Player extends BasicSprite {
  constructor(properties) {
    super(properties);

    this.setScale(SCALE_RATIO);
  }

  update() {
    super.update();
    this.handlePhysics();
    this.handleControls();
    this.advance();
  }

  handlePhysics() {
    this.dy += PHYSICS.GRAVITY_FORCE;
    this.ddx = 0;
    this.ddy = 0;
  }

  handleControls() {
    if (kontra.keyPressed("left")) {
      this.rotation += -2;
    }
    if (kontra.keyPressed("right")) {
      this.rotation += 2;
    }
    if (kontra.keyPressed("up")) {
      this.showFlame = true;
      this.handleAcceleration();
      if (this.flameTimeout) {
        clearTimeout(this.flameTimeout);
      }
      this.flameTimeout = setTimeout(() => {
        this.showFlame = false;
      }, GAMEPLAY.FLAME_TIMEOUT);
    }
  }

  handleAcceleration() {
    const cos = Math.cos(degreesToRadian(this.rotation));
    const sin = Math.sin(degreesToRadian(this.rotation));
    this.ddx = sin * PHYSICS.ACCELERATION_FORCE;
    this.ddy = cos * -PHYSICS.ACCELERATION_FORCE;

    const magnitude = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
    if (magnitude > PHYSICS.MAGNITUDE_MAX && cos > 0) {
      this.dx *= PHYSICS.STOPPING_FORCE;
      this.dy *= PHYSICS.STOPPING_FORCE;
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

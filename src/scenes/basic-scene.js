import Scene from "../game/scene";
import { GAMEPLAY, DISPLAY } from "../configs/game-config";

class BasicScene extends Scene {
  create() {
    this.add.player(
      DISPLAY.WIDTH / 2,
      DISPLAY.HEIGHT / 2,
      40,
      40,
      GAMEPLAY.PLAYER_COLOR
    );
  }
}

export default BasicScene;

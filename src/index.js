import Game from "./game/game";
import BasicScene from "./scenes/basic-scene";
import { GAMEPLAY, DISPLAY } from "./configs/game-config";
import "./index.css";

const game = new Game({
  width: DISPLAY.WIDTH,
  height: DISPLAY.HEIGHT,
  background: GAMEPLAY.BACKGROUND,
  scenes: [BasicScene]
});

game.start();

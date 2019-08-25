import Game from "./game/game";
import BasicScene from "./scenes/basic-scene";

const game = new Game({
  width: 800,
  height: 600,
  background: "black",
  scenes: [BasicScene]
});

game.start();

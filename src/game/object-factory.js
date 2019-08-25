import Player from "../gameobjects/player";

class ObjectFactory {
  constructor(game) {
    this.game = game;
    this.gameObjects = [];
  }

  player(x, y, width, height, color) {
    const player = new Player({ x, y, width, height, color });
    this.gameObjects.push(player);

    return player;
  }
}

export default ObjectFactory;

import { GameLoop, init } from "kontra";
import ObjectFactory from "./object-factory";
import InputManager from "./input-manager";
import SceneManager from "./scene-manager";
import EventManager from "./event-manager";

class Game {
  constructor(config) {
    this.objectFactory = new ObjectFactory(this);
    this.config = { width: config.width, height: config.height };
    this.input = new InputManager();
    this.loop = null;
    this.sceneManager = new SceneManager(this, config.scenes);
    this.eventManager = new EventManager();

    this.initGame(config);
  }

  initGame(config) {
    this.initCanvas(
      config.canvas,
      config.width,
      config.height,
      config.background
    );

    init(this.config.canvas);
  }

  initCanvas(canvas, width, height, background) {
    this.config.canvas = canvas || document.createElement("canvas");
    this.config.canvas.width = width;
    this.config.canvas.height = height;
    this.config.canvas.style.background = background;

    document.body.appendChild(this.config.canvas);
  }

  start() {
    this.loop = GameLoop({
      update: () =>
        this.objectFactory.gameObjects.forEach(object => object.update()),
      render: () =>
        this.objectFactory.gameObjects.forEach(object => object.render())
    });

    this.loop.start();
    this.sceneManager.init();
  }
}

export default Game;

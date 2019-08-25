class Scene {
  constructor(manager) {
    this.manager = manager;
    this.add = manager.game.objectFactory;
    this.input = manager.game.input;
  }
}

export default Scene;

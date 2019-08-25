class Scene {
  constructor(manager) {
    this.manager = manager;
    this.add = manager.game.objectFactory;
  }
}

export default Scene;

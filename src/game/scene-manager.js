class SceneManager {
  constructor(game, scenes) {
    this.scenes = scenes;
    this.game = game;
    this.list = [];
    this.activeScene = null;
  }

  init() {
    this.scenes.forEach(Scene => {
      this.list.push(new Scene(this));
    });

    [this.activeScene] = this.list;
    this.start(this.activeScene);
  }

  start(scene) {
    scene.create();
  }
}

export default SceneManager;

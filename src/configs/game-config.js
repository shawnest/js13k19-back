export const DISPLAY = Object.freeze({
  WIDTH: window.screen.width,
  HEIGHT: window.screen.height,
  DEFAULT_WIDTH: 800,
  DEFAULT_HEIGHT: 600
});

export const GYRO_SUPPORTED = window.DeviceOrientationEvent;

export const SCALE_RATIO = Math.min(
  DISPLAY.WIDTH / DISPLAY.DEFAULT_WIDTH,
  DISPLAY.HEIGHT / DISPLAY.DEFAULT_HEIGHT
);

export const GAMEPLAY = Object.freeze({
  BACKGROUND: "black",
  PLAYER_COLOR: "white",
  FLAME_COLOR: "yellow",
  FLAME_TIMEOUT: 300
});

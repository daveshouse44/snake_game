import {
  update as updateSnake,
  render as renderSnake,
  snakeSpeed,
} from "./js/snake.js";

let prevRender = 0;
const gameSurface = document.getElementById("game-surface");

// game loop
function main(currentTime) {
  window.requestAnimationFrame(main);
  const secsSincePrevRender = (currentTime - prevRender) / 1000;
  if (secsSincePrevRender < 1 / snakeSpeed) return;

  prevRender = currentTime;

  update();
  render();
}
window.requestAnimationFrame(main);

function update() {
  updateSnake();
}

function render() {
  gameSurface.innerHTML = "";
  renderSnake(gameSurface);
}

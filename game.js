import {
  update as updateSnake,
  render as renderSnake,
  snakeSpeed,
} from "./js/snake.js";

import { update as updateFood, render as renderFood } from "./js/food.js";

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

// calls functions to update data for the game surface
function update() {
  updateSnake();
  updateFood();
}

// calls functions to draw updated game to surface
function render() {
  gameSurface.innerHTML = "";
  renderSnake(gameSurface);
  renderFood(gameSurface);
}

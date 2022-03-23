import {
  update as updateSnake,
  render as renderSnake,
  snakeSpeed,
  getSnakeHead,
  snakeOverlap,
} from "./js/snake.js";

import { update as updateFood, render as renderFood } from "./js/food.js";

import { outsideSurface } from "./js/surface.js";

let prevRender = 0;
let gameOver = false;
let bodyCount = document.getElementsByClassName("snake");
const gameSurface = document.getElementById("game-surface");

// game loop
function main(currentTime) {
  let gameScore = bodyCount.length - 1;
  if (gameOver) {
    if (
      confirm(
        `You lost! 🐍💀\nYour score was ${gameScore}!\nPress OK to restart.`
      )
    ) {
      window.location.reload();
    }
    return;
  }
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
  snakeFail();
}

// calls functions to draw updated game to surface
function render() {
  gameSurface.innerHTML = "";
  renderSnake(gameSurface);
  renderFood(gameSurface);
}

// function to fail game
function snakeFail() {
  gameOver = outsideSurface(getSnakeHead()) || snakeOverlap();
}

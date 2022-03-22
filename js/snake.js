import { getKeyDirection } from "./keyboard.js";

export const snakeSpeed = 5;
const snakeBody = [{ x: 11, y: 11 }];

export function update() {
  const keyDirection = getKeyDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  //   snake movements
  snakeBody[0].x += keyDirection.x;
  snakeBody[0].y += keyDirection.y;
}

export function render(gameSurface) {
  snakeBody.forEach((segment) => {
    const snakeElem = document.createElement("div");
    snakeElem.style.gridRowStart = segment.y;
    snakeElem.style.gridColumnStart = segment.x;
    snakeElem.classList.add("snake");
    gameSurface.appendChild(snakeElem);
  });
}

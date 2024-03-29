import { getKeyDirection } from "./controls.js";

// constants of start of game
export const snakeSpeed = 7;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;

// update position of snake and segments
export function update() {
  addSegments();
  const keyDirection = getKeyDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }

  //   snake movements
  snakeBody[0].x += keyDirection.x;
  snakeBody[0].y += keyDirection.y;
}

// determines where head of snake is
export function getSnakeHead() {
  return snakeBody[0];
}

// renders snake to game surface as html elements
export function render(gameSurface) {
  snakeBody.forEach((segment) => {
    const snakeElem = document.createElement("div");
    snakeElem.style.gridRowStart = segment.y;
    snakeElem.style.gridColumnStart = segment.x;
    snakeElem.classList.add("snake");
    gameSurface.appendChild(snakeElem);
  });
}

// function calls the function to grow snake
export function growSnake(quantity) {
  newSegments += quantity;
}

// determines if any part of snake is touching food or self
export function contactSnake(coordinate, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return equalCoordinates(segment, coordinate);
  });
}

// determines if snake has or has not overlapped
export function snakeOverlap() {
  return contactSnake(snakeBody[0], { ignoreHead: true });
}

// determines if snake segment and food coordinates match
function equalCoordinates(coord1, coord2) {
  return coord1.x === coord2.x && coord1.y === coord2.y;
}

// function adds length to snake body array
function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newSegments = 0;
}

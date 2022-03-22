import { snakeEats, growSnake } from "./snake.js";
import { randomGridCoordinate } from "./grid.js";

// food start variables and constants
let food = getRandomFoodCoordinate();
const growRate = 1;

// updates snake body when eats food
export function update() {
  if (snakeEats(food)) {
    growSnake(growRate);
    food = getRandomFoodCoordinate();
  }
}

// renders food to game surface as html elements
export function render(gameSurface) {
  const foodElem = document.createElement("div");
  foodElem.style.gridRowStart = food.y;
  foodElem.style.gridColumnStart = food.x;
  foodElem.classList.add("food");
  gameSurface.appendChild(foodElem);
}

// randomize food positon where it cannot overlap snake
function getRandomFoodCoordinate() {
  let newFoodCoordinate;
  while (newFoodCoordinate == null || snakeEats(newFoodCoordinate)) {
    newFoodCoordinate = randomGridCoordinate();
  }
  return newFoodCoordinate;
}

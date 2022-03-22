export const snakeSpeed = 5;
const snakeBody = [{ x: 11, y: 11 }];

export function update() {
  console.log("Update Snake");
}

export function render(gameSurface) {
  snakeBody.forEach((segment) => {
    const snakeElem = document.createElement("div");
    snakeElem.style.gridRowStart = segment.x;
    snakeElem.style.gridColumnStart = segment.y;
    snakeElem.classList.add("snake");
    gameSurface.appendChild(snakeElem);
  });
}

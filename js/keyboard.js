let keyDirection = { x: 0, y: 0 };
let prevKeyDirection = { x: 0, y: 0 };

// adding arrow key inputs for user / if statements prevent snake from going back over itself
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (prevKeyDirection.y !== 0) break;
      keyDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (prevKeyDirection.y !== 0) break;
      keyDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (prevKeyDirection.x !== 0) break;
      keyDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (prevKeyDirection.x !== 0) break;
      keyDirection = { x: 1, y: 0 };
      break;
  }
});

// exports the key changes as directions
export function getKeyDirection() {
  prevKeyDirection = keyDirection;
  return keyDirection;
}

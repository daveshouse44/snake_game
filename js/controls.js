let keyDirection = { x: 0, y: 0 };
let prevKeyDirection = { x: 0, y: 0 };
let startTouchPosition = { x: 0, y: 0 };

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

window.addEventListener("touchstart", (e) => {
  startTouchPosition.x = e.touches[0].clientX;
  startTouchPosition.y = e.touches[0].clientY;
});

window.addEventListener("touchmove", (e) => {
  let deltaX = e.touches[0].clientX - startTouchPosition.x;
  let deltaY = e.touches[0].clientY - startTouchPosition.y;

  // Determine the direction of the swipe
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    // Horizontal swipe
    if (deltaX > 0) {
      // Swipe to the right
      if (prevKeyDirection.x !== 0) return;
      keyDirection = { x: 1, y: 0 };
    } else {
      // Swipe to the left
      if (prevKeyDirection.x !== 0) return;
      keyDirection = { x: -1, y: 0 };
    }
  } else {
    // Vertical swipe
    if (deltaY > 0) {
      // Swipe downwards
      if (prevKeyDirection.y !== 0) return;
      keyDirection = { x: 0, y: 1 };
    } else {
      // Swipe upwards
      if (prevKeyDirection.y !== 0) return;
      keyDirection = { x: 0, y: -1 };
    }
  }

  // Prevent the default action to stop scrolling when swiping
  e.preventDefault();
});

// exports the key changes as directions
export function getKeyDirection() {
  prevKeyDirection = keyDirection;
  return keyDirection;
}

const gridSize = 21;

// function finds random spot on grid
export function randomGridCoordinate() {
  return {
    x: Math.floor(Math.random() * gridSize) + 1,
    y: Math.floor(Math.random() * gridSize) + 1,
  };
}

// determines position outside of surface grid
export function outsideSurface(coordinate) {
  return (
    coordinate.x < 1 ||
    coordinate.x > gridSize ||
    coordinate.y < 1 ||
    coordinate.y > gridSize
  );
}

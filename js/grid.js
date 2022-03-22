const gridSize = 21;

// function finds random spot on grid
export function randomGridCoordinate() {
  return {
    x: Math.floor(Math.random() * gridSize) + 1,
    y: Math.floor(Math.random() * gridSize) + 1,
  };
}

const GRID_SIZE = 16;
const grid = document.querySelector('.grid');
// grid.textContent = 'Hello, Grid!';
for (let r = 0; r < GRID_SIZE; r++) {
  for (let c = 0; c < GRID_SIZE; c++) {
    const child = document.createElement('div');
    child.classList.add('px', r, c);
    grid.appendChild(child);
  }
}

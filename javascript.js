const GRID_SIZE = 800;
const grid = document.querySelector('.grid');
let gridCells = 16;

const customGrid = (gridCells) => {
  grid.style.height = `${GRID_SIZE}px`;
  grid.style.width = `${GRID_SIZE}px`;
  grid.style.gridTemplateRows = `repeat(${gridCells}, 1fr)`;
  grid.style.gridTemplateColumns = `repeat(${gridCells}, 1fr)`;
};

customGrid(gridCells);

for (let r = 0; r < gridCells; r++) {
  for (let c = 0; c < gridCells; c++) {
    const child = document.createElement('div');
    child.addEventListener('mouseover', (e) => {
      e.target.classList.add('fill');
    });
    grid.appendChild(child);
  }
}

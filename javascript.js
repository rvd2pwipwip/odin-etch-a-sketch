const GRID_SIZE = 600;
const promptBtn = document.querySelector('.prompt');
const grid = document.querySelector('.grid');
let gridCells = 16;

promptBtn.addEventListener('click', () => {
  gridCells = prompt('How many rows and columns?');
  if (gridCells > 0 && gridCells < 101) {
    grid.innerHTML = '';
    createGrid(gridCells);
  } else {
    alert('Please enter a number between 1 and 100');
  }
});

const createGrid = (gridCells) => {
  grid.style.height = `${GRID_SIZE}px`;
  grid.style.width = `${GRID_SIZE}px`;
  grid.style.gridTemplateRows = `repeat(${gridCells}, 1fr)`;
  grid.style.gridTemplateColumns = `repeat(${gridCells}, 1fr)`;

  for (let r = 0; r < gridCells; r++) {
    for (let c = 0; c < gridCells; c++) {
      const child = document.createElement('div');
      child.addEventListener('mouseover', (e) => {
        e.target.classList.add('fill');
      });
      grid.appendChild(child);
    }
  }
};

createGrid(gridCells);

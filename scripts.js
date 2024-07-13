const container = document.querySelector('.container');

const heading = document.createElement("h1");

heading.classList.add('title');

heading.textContent = "Sketch Grid";

container.appendChild(heading);

const instructions = document.createElement("h3");

instructions.classList.add('instructions');

instructions.textContent = "Hover over the grid to draw, enter a number between 1 and 100.";

container.appendChild(instructions);

const grid_and_buttons = document.createElement("div");

grid_and_buttons.classList.add('grid-buttons');

container.appendChild(grid_and_buttons);

const buttons = document.createElement("div");

buttons.classList.add('buttons');

grid_and_buttons.appendChild(buttons);

const gridSizeInput = document.createElement("input");
gridSizeInput.type = "number";
gridSizeInput.min = "1";
gridSizeInput.max = "100";
gridSizeInput.value = "16";  // Default value
buttons.appendChild(gridSizeInput);

const clear_button = document.createElement("button");

clear_button.classList.add('clear-button');

clear_button.textContent = "Clear";

buttons.appendChild(clear_button);

const color_button = document.createElement("button");

color_button.classList.add('color-button');

color_button.textContent = "Color";

buttons.appendChild(color_button);

const grid = document.createElement("div");

grid.classList.add('grid');

grid_and_buttons.appendChild(grid);

function createGrid(size) {

    grid.innerHTML = "";
    const gridSize = 400;
    const cellSize = gridSize / size;

    grid.style.width = `${gridSize}px`;
    grid.style.height = `${gridSize}px`;



    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add('cell');
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;


        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "black";
        });

        grid.appendChild(cell);
    
    }

}

createGrid(16);

gridSizeInput.addEventListener('input', () => {
    let size = parseInt(gridSizeInput.value);
    if (size < 1 || size > 100 || isNaN(size)) {
        
        return;
    }
    createGrid(size);
});

clear_button.addEventListener('click', () => {
    createGrid(parseInt(gridSizeInput.value));
});







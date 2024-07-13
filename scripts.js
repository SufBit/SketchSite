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

//Color button
const color_button = document.createElement("button");
color_button.classList.add('color-button');
color_button.textContent = "Color";
buttons.appendChild(color_button);



//RGB 
const rgb_button = document.createElement("button");
rgb_button.classList.add('rgb-button');
rgb_button.textContent = "RGB";

buttons.appendChild(rgb_button);

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


rgb_button.addEventListener('click', () => {
    grid.childNodes.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        });
    });
});

const colorPalette = document.createElement("div");
colorPalette.classList.add('color-palette');

const colors = ['#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];

colors.forEach(color => {
    const swatch = document.createElement("div");
    swatch.classList.add('color-swatch');
    swatch.style.backgroundColor = color;
    swatch.addEventListener('click', () => {
        applyColor(color);
    });
    colorPalette.appendChild(swatch);
});

buttons.appendChild(colorPalette);

color_button.addEventListener('click', (event) => {
    const rect = color_button.getBoundingClientRect();
    const posX = rect.left + window.scrollX;
    const posY = rect.top + window.scrollY + rect.height;
    colorPalette.style.left = `${posX}px`;
    colorPalette.style.top = `${posY}px`;
    colorPalette.classList.toggle('show');
});

function applyColor(color) {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = color;
        });
    });
    colorPalette.classList.remove('show');
}







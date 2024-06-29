function createGrid(size) {
    const container = document.querySelector('.container');
    container.innerHTML = ''; // Clear existing grid
    const squareSize = 960 / size; // Calculate size of each square
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.opacity = 0;
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = getRandomColor();
            square.style.opacity = parseFloat(square.style.opacity) + 0.1;
        });
        container.appendChild(square);
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

document.getElementById('resetButton').addEventListener('click', () => {
    let size;
    do {
        size = prompt("Enter the number of squares per side for the new grid (maximum 100):");
    } while (size > 100 || size < 1);
    createGrid(size);
});

// Initial grid
createGrid(16);

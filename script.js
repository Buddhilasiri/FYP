document.addEventListener('DOMContentLoaded', () => {
    const road = document.getElementById('road');
    const animal = document.getElementById('animal');
    let x = -10, y = -6; // Initial position

    // Function to create and display the coordinate system
    function displayCoordinates() {
        // Append x coordinates
        for (let x = -10; x <= 60; x += 5) {
            const labelX = document.createElement('div');
            labelX.classList.add('coordinate-label');
            labelX.textContent = x;
            labelX.style.left = `${(x + 10) / 70 * 100}%`;
            labelX.style.bottom = `-20px`;
            road.appendChild(labelX);
        }

        // Append y coordinates
        for (let y = 0; y >= -30; y -= 5) {
            const labelY = document.createElement('div');
            labelY.classList.add('coordinate-label');
            labelY.textContent = y;
            labelY.style.left = `-30px`;
            labelY.style.bottom = `${(30 + y) / 30 * 100}%`;
            road.appendChild(labelY);
        }
    }

    displayCoordinates();

    function createGrid() {
        // Add horizontal lines
        for (let y = 0; y >= -30; y -= 5) {
            let line = document.createElement('div');
            line.classList.add('grid-line', 'horizontal-line');
            line.style.bottom = `${(30 + y) / 30 * 100}%`;
            road.appendChild(line);
        }
    
        // Add vertical lines
        for (let x = -10; x <= 60; x += 5) {
            let line = document.createElement('div');
            line.classList.add('grid-line', 'vertical-line');
            line.style.left = `${(x + 10) / 70 * 100}%`;
            road.appendChild(line);
        }
    }
    
    // Call createGrid function after the road element is defined
    createGrid();
    // Function to update animal position on the road
    function updateAnimalPosition(newX, newY) {
        // Transform (x,y) to percentages relative to the road dimensions
        animal.style.left = `${(newX + 10) / 70 * 100}%`;
        animal.style.bottom = `${(newY + 30) / 30 * 100}%`;
    }

    // Simulate animal movement
    // Array of points that define the path of the road
    const path = [
        { x: -10,y: -6 },
        { x: -5 ,y: -8 },
        { x: 0 ,y: -10 },
        { x: 5 ,y: -10 },
        { x: 10 ,y: -12 },
        { x: 12 ,y: -15 },
        { x: 15 ,y: -17 },
        { x: 20 ,y: -17 },
        { x: 25 ,y: -20 },
        { x: 30 ,y: -17 },
        { x: 35 ,y: -20 },
        { x: 40 ,y: -15 },
        { x: 45 ,y: -10 },
        { x: 50 ,y: -12 },
        { x: 55 ,y: -13 },
        { x: 60 ,y: -12 },

    ];
    let currentPointIndex = 0;

    function moveToNextPoint() {
        if (currentPointIndex < path.length - 1) {
            // Get the next point from the path
            const nextPoint = path[currentPointIndex + 1];

            // Logic to move the animal towards the next point
            // This could be linear movement or some easing function for smoother motion
            x = nextPoint.x;
            y = nextPoint.y;

            // Update the animal's position on the map
            updateAnimalPosition(x, y);

            // Increment the point index to move to the next point in the array
            currentPointIndex++;
        } else {
            // Reset or stop the animation if the end of the path is reached
            // For continuous movement, you might loop back to the start
            currentPointIndex = 0;
        }
    }

    // Start the movement
    setInterval(moveToNextPoint, 2000); // Update position every 2 seconds

});

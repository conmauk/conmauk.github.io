// Initialize the counter variable
let counter = 0;

// Function to increment the counter and update the display
function updateCounter() {
    counter++;
    document.getElementById('counter').textContent = counter;
}

// Update the counter every 1000 milliseconds (1 second)
setInterval(updateCounter, 1000);

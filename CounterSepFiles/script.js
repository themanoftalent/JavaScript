// Get the counter element
const counterElement = document.getElementById('count');

// Get the increment and decrement buttons
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

// Initial count value
let count = 0;

// Function to update the counter element with the current count
function updateCounter() {
    counterElement.textContent = count;
}

// Function to handle the increment button click
function handleIncrement() {
    count++;
    updateCounter();
}

// Function to handle the decrement button click
function handleDecrement() {
    if (count > 0) {
        count--;
        updateCounter();
    }
}

// Add click event listeners to the buttons
incrementButton.addEventListener('click', handleIncrement);
decrementButton.addEventListener('click', handleDecrement);

// Initial update of the counter
updateCounter();

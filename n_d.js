// Create a global variable to store the current mode
let mode = 'day';

// Create a function to toggle the mode
function toggleMode() {
  if (mode === 'day') {
    mode = 'night';
    document.body.classList.add('night-mode');
  } else {
    mode = 'day';
    document.body.classList.remove('night-mode');
  }
}

// Add a click event listener to a button to toggle the mode
const button = document.querySelector('.toggle-mode-button');
button.addEventListener('click', toggleMode);

// Set the initial mode
document.body.classList.add(mode);

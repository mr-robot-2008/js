// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

const guessSubmit = document.getElementById('guessSubmit');
const guessField = document.getElementById('guessField');
const message = document.getElementById('message');
let attempts = 0;

guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {
    const userGuess = Number(guessField.value);
    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        message.style.color = 'green';
        setGameOver();
    } else if (attempts >= 5) {
        message.textContent = `Game Over! The correct number was ${randomNumber}.`;
        message.style.color = 'red';
        setGameOver();
    } else if (userGuess < randomNumber) {
        message.textContent = `Try a higher number. Attempts: ${attempts}`;
        message.style.color = 'red';
    } else if (userGuess > randomNumber) {
        message.textContent = `Try a lower number. Attempts: ${attempts}`;
        message.style.color = 'red';
    }
}

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
}

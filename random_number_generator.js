// Random Number Generator
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Usage example
const minNumber = 1;
const maxNumber = 100;
const randomNum = generateRandomNumber(minNumber, maxNumber);
console.log(`Random number between ${minNumber} and ${maxNumber}: ${randomNum}`);

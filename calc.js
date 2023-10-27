// Generate a random math problem
function generateProblem() {
  const operators = ['+', '-', '*', '/'];
  const operand1 = Math.floor(Math.random() * 100) + 1;
  const operand2 = Math.floor(Math.random() * 100) + 1;
  const operator = operators[Math.floor(Math.random() * operators.length)];

  return `${operand1} ${operator} ${operand2}`;
}

// Check the user's answer
function checkAnswer(problem, answer) {
  const result = eval(problem);
  return result === answer;
}

// Start the game
function startGame() {
  // Generate a new problem
  const problem = generateProblem();

  // Display the problem to the user
  const problemElement = document.querySelector('#problem');
  problemElement.textContent = problem;

  // Get the user's answer
  const answerElement = document.querySelector('#answer');
  answerElement.value = '';

  // Add an event listener to the answer element to check the user's answer when they press enter
  answerElement.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      // Get the user's answer
      const answer = answerElement.value;

      // Check the user's answer
      const isCorrect = checkAnswer(problem, answer);

      // Display the feedback to the user
      const feedbackElement = document.querySelector('#feedback');
      feedbackElement.textContent = isCorrect ? 'Correct!' : 'Incorrect.';

      // If the user's answer is correct, start a new game
      if (isCorrect) {
        startGame();
      }
    }
  });
}

// Start the game when the page loads
window.addEventListener('load', startGame);

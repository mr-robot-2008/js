const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter an amount: ', (n) => {
  n = parseInt(n);
  const count = [0, 0, 0, 0];

  if (n >= 100) {
    count[0] = Math.floor(n / 100);
    n %= 100;
  }

  if (n >= 50) {
    count[1] = Math.floor(n / 50);
    n %= 50;
  }

  if (n >= 20) {
    count[2] = Math.floor(n / 20);
    n %= 20;
  }

  count[3] = n;

  console.log('100 rupee note: ' + count[0]);
  console.log('50 rupee note: ' + count[1]);
  console.log('20 rupee note: ' + count[2]);
  console.log('1 rupee note: ' + count[3]);

  rl.close();
});

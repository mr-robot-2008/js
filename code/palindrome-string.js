const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter string: ", function (str) {
    let palindrome = true;
    let s = 0;
    let e = str.length - 1;

    while (s < e) {
        if (str[s] === str[e]) {
            s++;
            e--;
        } else {
            palindrome = false;
            break;
        }
    }

    if (palindrome) {
        console.log("String is a palindrome");
    } else {
        console.log("String is not a palindrome");
    }

    rl.close();
});

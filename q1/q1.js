const readline = require('readline');


function fizzBuzz(N) {
    for (let i = 1; i <= N; i++) {
       
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number (N): ", function(userInput) {
    
    const N = parseInt(userInput);

    
    fizzBuzz(N);

    rl.close();
});

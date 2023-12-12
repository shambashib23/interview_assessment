const readline = require('readline');

function isPrime(N) {
    if (N <= 1) {
        return "NotPrime";
    }
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            return "NotPrime";
        }
    }
    return "Prime";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter an integer: ", function(userInput) {
    const N = parseInt(userInput);
    const result = isPrime(N);
    console.log(result);
    rl.close();
});

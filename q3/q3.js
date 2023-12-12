const readline = require('readline');


function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        
        start++;
        end--;
    }

    return arr;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter an array (comma-separated values): ", function(userInput) {
    
    const inputArray = userInput.split(',').map(Number);

    
    const reversedArray = reverseArray(inputArray);


    console.log(reversedArray);

    rl.close();
});

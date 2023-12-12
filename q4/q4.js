const readline = require('readline');

function findCombinations(arr, target) {
    const result = [];
    const mergedArray = [];
    const doubledTarget = target * 2;

    
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push([arr[i], arr[j]]);
            }
        }
    }

   
    mergedArray.push(...arr.sort((a, b) => a - b));

   
    const resultDoubled = [];
    for (let i = 0; i < mergedArray.length - 1; i++) {
        for (let j = i + 1; j < mergedArray.length; j++) {
            if (mergedArray[i] + mergedArray[j] === doubledTarget) {
                resultDoubled.push([mergedArray[i], mergedArray[j]]);
            }
        }
    }

    return {
        originalTarget: result,
        mergedArray: mergedArray,
        doubledTarget: resultDoubled
    };
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter an array of integers (comma-separated values): ", function (userInput) {
    rl.question("Enter the target value: ", function (targetInput) {
        
        const inputArray = userInput.split(',').map(Number);
        const target = parseInt(targetInput);

       
        const output = findCombinations(inputArray, target);
        console.log(`First Combination For "${target}" :`, output.originalTarget);
        console.log(`Merge Into a Single Array :`, output.mergedArray);
        console.log(`Second Combination For "${target * 2}" :`, output.doubledTarget);

        rl.close();
    });
});

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallbacks) {
    if (numsLeft === 0) {
        reader.close();
        return completionCallbacks(sum);
    }

    reader.question("Please Enter No.", response => {
        sum += parseInt(response);
        console.log(`${sum}`);
        addNumbers(sum, numsLeft - 1, completionCallbacks);
    });
    
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
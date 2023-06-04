// program to find the LCM of two positive integers

const readline = require("readline")

const loopInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const userInput = message => new Promise(
    resolve => loopInterface.question(message, response => resolve(response))
);

const main = async () => {
    let num1 = await userInput("Enter the first positive integer: ")
    let num2 = await userInput("Enter the second positive integer: ")

    let lcm = (num1 > num2) ? num1 : num2

    while (true) {
        if (lcm % num1 == 0 && lcm % num2 == 0) {
            console.log(`The LCM of ${num1} and ${num2} is ${lcm}.`);
            break;
        }
        lcm++;
    }
    loopInterface.close()
}

main()

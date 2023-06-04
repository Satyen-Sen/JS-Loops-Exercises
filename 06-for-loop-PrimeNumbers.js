// importing readline module
const readline = require("readline")

// creating interface for input and output
const loopInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let primeArray = []

loopInterface.question("How many prime numbers you want to generate => ", function (limit) {
    for (let i = 0; primeArray.length <= limit-1; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break
            }
        }
        if (i == 0) {
            continue
        } else if (i == 1) {
            continue   
        } else if (i >= 2 && isPrime == true) {
            primeArray.push(i);
        }
    }
    console.log(primeArray)
    loopInterface.close()
})

// loopInterface.question("Enter the number you want to check --> ", function (num) {
//     let isPrime = true;
//     if (num == 0) {
//         console.log(`${num} is neither prime nor composite.`) 
//     } else if (num == 1) {
//         console.log(`${num} is neither prime nor composite.`) 
//     } else if (num > 1) {
//         for (let i = 2; i < num; i++) {
//             if (num % i == 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             console.log(`${num} is a prime number`);
//         } else {
//             console.log(`${num} is a not prime number`);
//         }
//     }
//     loopInterface.close()
// })
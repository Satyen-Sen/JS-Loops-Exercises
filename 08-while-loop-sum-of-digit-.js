const readline = require("readline")

const loopInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let count = 0

// loopInterface.question("Enter any number to check the number of digits => ", function (num) {
//     while(num!=0){
//         num = Math.floor(num/10)
//         count++
//     }
//     console.log(count)
//     loopInterface.close()
// })

loopInterface.question("Enter any number to calculate the sum of its digits => ", function (num) {
    while(num!=0){
        count += num % 10;
        num = Math.floor(num/10)
    }
    console.log(count)
    loopInterface.close()
})

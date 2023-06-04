const readline = require("readline")

const loopInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let count = ""
// let sum = 0

loopInterface.question("Enter the count of even numbers you want to generate ", function (value) {
    count = value
    for (let index = 0; index <= (count*2-1); index += 2) {
        console.log(index)
    }
    loopInterface.close()
})

// loopInterface.question("Enter the count of even numbers you want to add --> ", function (value) {
//     count = value
//     for (let index = 0; index <= (count*2-1); index += 2) {
//         sum = sum + index
//     }
//     loopInterface.close()
//     console.log(sum)
// })


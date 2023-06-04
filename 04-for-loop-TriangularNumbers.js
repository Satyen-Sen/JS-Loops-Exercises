const readline = require("readline")

const loopInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let count = ""
let sum = 0

loopInterface.question("Enter the count of triangular numbers you want to generate => ", function (value) {
    count = value
    for (let index = 1; index <= count; index++) {
        sum += index
        console.log(sum)
    }
    loopInterface.close()
})

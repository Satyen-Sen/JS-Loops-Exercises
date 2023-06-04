// importing readline module
const readline = require("readline")

// creating interface for input and output
const loopInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


let count = ""
const fizzBuzzArray = []

loopInterface.question("Enter numbers you want to generate => ", function (value) {
    count = value

    for (let index = 1; index <= count; index++) {
        if (index % (5*3) == 0) {
            fizzBuzzArray.push(`FizzBuzz`)
        } else if (index % 5 == 0) {
            fizzBuzzArray.push(`Buzz`)
        } else if (index % 3 == 0) {
            fizzBuzzArray.push(`Fizz`)
        } else {
            fizzBuzzArray.push(index)
        }
    }
    console.log(fizzBuzzArray)
    // closing input stream
    loopInterface.close()
})


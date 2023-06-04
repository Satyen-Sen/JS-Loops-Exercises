// Find HCF/GCD of of two positive integers

const readline = require("readline")

const loopInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const userInput = message => new Promise(
    resolve => loopInterface.question(message, response => resolve(response))
)

const main = async () => {
    let a = await userInput("Enter the First Integer: ")
    let b = await userInput("Enter the Second Integer: ")
    let int1 = a
    let int2 =b

    while (a != b) {
        if (a > b) {
            a = a - b
        } else {
            b = b - a
        }
    }
    let gcd = a
    console.log(`The HCF of ${int1} & ${int2} is ${gcd}.`)
    loopInterface.close()
}

main()

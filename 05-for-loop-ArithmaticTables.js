const readline = require("readline")

const loopInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

loopInterface.question("Enter the number, you want to geneate table for --> ", function (tens) {
    console.log('\nTable of ' + tens)
    for (let ones = 1; ones <= 10; ones++) {
        console.log(`${tens} * ${ones} = ${tens*ones}`)
    }
    loopInterface.close()
})

// let count = 0
// loopInterface.question("How many tables you want to geneate --> ", function (value) {
//     count = value
//     for (let tens = 1; tens <= count; tens++) {
//         console.log('\nTable of ' + tens)
//         for (let ones = 1; ones <= 10; ones++) {
//             console.log(`${tens} * ${ones} = ${tens*ones}`)
//         }
//     }
//     loopInterface.close()
// })
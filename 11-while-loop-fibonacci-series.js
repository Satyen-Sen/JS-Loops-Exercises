const readline = require("readline")

const loopInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let n1 = 0
let n2 = 1
let count = 2    
let n3
loopInterface.question("How many Fibonacci Numbers you want to generate? ", function (limit) {
    if (limit < 2) {
        console.log(n1)
    } else {
        console.log(n1)
        console.log(n2)
        while(count < limit){
            n3 = n1 + n2
            console.log(n3); 
            n1 = n2
            n2 = n3
            count++
        }
    }
    loopInterface.close()
})

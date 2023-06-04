// Generate all 3-digit Armstrong Numbers.

function ArmstrongNumbers() {
    for (var i = 1; i < 10; ++i) {
        for (var j = 0; j < 10; ++j) {
            for (var k = 0; k < 10; ++k){
                var sum1 = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
                var sum2 = (i * 100 + j * 10 +  k);
                if (sum1 == sum2) {     
                    console.log(sum1);
                }
            }
        }
    }
}
ArmstrongNumbers();
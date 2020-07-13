var num1 = 3;
var num2 = 5;
let multiNum = 0;
let multiNum2 = 0;

for(var i=3; i<1000; i++) {
    if ((i%num1)=== 0) {
        multiNum++;
    } 
}

for(var j=5; j<1000; j++) {
    if ((j%num2)=== 0) {
        multiNum2++;
    } 
}


alert(`The sum of the multiples of ${num1} and ${num2} under 1000 is: ${multiNum + multiNum2}`);
/*var num1 = 3;
var num2 = 5;
let multiNum = 0;
let multiNum2 = 0;

for(var i=3; i<1000; i++) {
    if ((i%num1)=== 3 || (i%num1)=== 3) {
        multiNum++;
    } 
}

for(var j=5; j<1000; j++) {
    if ((j%num2)=== 0) {
        multiNum2++;
    } 
}

alert(`The sum of the multiples of ${num1} and ${num2} under 1000 is: ${multiNum + multiNum2}`);
*/


// Task 1
// Finding sum of the multiples of 3 and 5 under 1000
num1 = prompt("Please enter 3");
num2 = prompt("Now enter 5");
var sum = 0;
for(var i=1; i < 1000; i++) {
	if(i%3 === 0 || i%5 === 0){
		sum = sum + i;
	}
}
alert(`The sum of the multiples of ${num1} and ${num2} under 1000 is: ${sum}`);

// Task 2
// 
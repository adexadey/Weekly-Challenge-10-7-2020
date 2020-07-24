// Challenge 1
// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
num1 = prompt("Please enter 3");
num2 = prompt("Now enter 5");
var sum = 0;
for(var i=1; i < 1000; i++) {
	if(i%3 === 0 || i%5 === 0){
		sum = sum + i;
	}
}
alert(`The sum of the multiples of ${num1} and ${num2} under 1000 is: ${sum}`);

// Challenge 2
/* Write a JavaScript program which accepts a number as input and inserts dashes (-)
between each two even numbers. For example if you accept 025468 the output should
be 0-254-6-8 */
 var setOfNumbers = prompt("Please enter a set of numbers");
 var hyphenated = [setOfNumbers[0]];
 for(var i = 1; i < setOfNumbers.length; i++) {
	 if((setOfNumbers[i-1]%2 === 0) && setOfNumbers[i]%2 === 0) {
		 hyphenated.push('-', setOfNumbers[i]);
	 } else {
		 hyphenated.push(setOfNumbers[i]);
		}
 }
	 
console.log(hyphenated.join('')); 
 
// Challenge 3
/*  */
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
/* Write a JavaScript program that accepts an array input from a user and finds the most
frequent item in the array.
Sample array : const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times ) */

alert("The following program finds the most frequent item in an the array");
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
var mf = 1;
var m = 0;
var item;
for (let i=0; i<arr1.length; i++)
{
        for (let j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
alert(`${item} (${mf} times)`);
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
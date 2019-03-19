// This is for printing prime numbers that are less than or equal to the given number
//Pseudo code
/*
__________________________________________________________________________
Initialise avariable n that will hold the value
Create a loop initialise (i) it to the first prime number 2 increment by 1 and end at the number n
Assume this number is prime
For each number in the above loop test if the above is correct by creating another for loop
by initializeing a variable j to 2, increment it by 1 and set it limit to i-1
if any number from the above loop divides the number from the mother then the number is not prime
Print the results from the computation that gives true statements
__________________________________________________________________________
*/

var n = 10; //line 5
for(var i =2; i<=n; i++) //line 6
{
	var iam_prime = true; //line 7
	for (var j =2; j<= (i-1); j++) //line 8
	{
		if(i%j===0) iam_prime = false; //line 10
	}
	if(iam_prime===true) console.log(i); //line 11
}
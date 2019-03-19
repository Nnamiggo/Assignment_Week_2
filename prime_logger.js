A number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1and itself.

In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

Write the code which outputs prime numbers in the interval from 2 to n.

For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value.



//Pseudo code
/*
__________________________________________________________________________
Initialise avariable n that will hold the value
Create a loop initialise (i) it to the first prime number 2 increment by 1 and end at the number n
For each number in the above loop test if it is prime by creating another for loop
by initializeing a variable j to 2, increment it by 1 and set it limit to i-1
if any number from the above loop divides the number from the mother then the number is prime
__________________________________________________________________________
*/

var n = 10;
for(var i =2; i<=n; i++)
{
	var iam_prime = true;
	for (var j =2; j<= i-1; j++)
	{
		if(i%j==0) iam_prime = false;
	}
	if(iam_prime=true) console.log(i);
}
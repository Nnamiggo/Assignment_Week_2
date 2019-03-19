Using your prime checker code,

> Create a function which returns an array of prime numbers between 0 and 100.

> create a file called shuffler.js with the following code.
> Import that shuffle.js and use its shuffle function to 
shuffle up the elements of the array. (You are advised to add code that will help you make the file ready for importing into other files, Google is your friend.)

> At this point, If you print your array out, it should have disorganized prime numbers.

> Write a function to arrange your array of numbers in ascending order, without using javascript sort functions.


Submit your work as sort_primes.js. For this time, the pair will have the same code.


// Pseudo code

// Reffer to the prime checker function in the previous exercises but instead put the results in an array


const disorganize = require('./shuffler.js'); //import statemnet


var arr = [];

//when calling the prime_number_calculator function initialise the paramater to  100

prime_number_calculator = n => {
  for (var i =2; i<=n; i++)
  {
    var are_you_prime = true;

        for (var testing_u = 2; testing_u<=i; testing_u++)
        {
          if (i%testing_u==0 && testing_u!==i)
          {
            are_you_prime =false;
          }
          
        }
        if (are_you_prime==true )
          {
            arr.push(i );
          }
             } 
}
prime_number_calculator(100);

//console.log(arr);

var distorted = disorganize(arr);

//console.log(distorted);

var x = distorted;

//get an array element 
//compare if it is smaller than all other elements
//if it is assign it index 0
//if not get the smallest and assign it 0
//continue with the next item

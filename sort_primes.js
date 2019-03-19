// Pseudo code

// Import the shuffler.js file after creating it
// Reffer to the prime checker function in the previous exercises but instead put the results in an array
// Sort the array in ascending order


const disorganize = require('./shuffler.js'); //import statemnet


var arr = []; //Initialize the array to empty

//when calling the prime_number_calculator function initialise the paramater to  100

prime_number_calculator = () => {
  for (var i =2; i<=100; i++)
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

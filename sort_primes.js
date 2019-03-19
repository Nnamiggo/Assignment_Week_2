// Pseudo code

// Import the shuffler.js file after creating it
// Reffer to the prime checker function in the previous exercises but instead put the results in an array
// Sort the array in ascending order


const disorganize = require('./shuffler.js'); //import statemnet


var arr = []; //Initialize the array to empty

//when calling the prime_number_calculator function initialise the paramater to  100

prime_number_calculator = (x,y) => {
  for (var i=x; i<=y; i++)
  {
    if(i<2) //For 2 is always the first prime number
     { 

    var are_you_prime = true; //Assume the number is prime and test if this is really true

        for (var testing_u = 2; testing_u<=i; testing_u++) //initialise counter to 2 because 1 will always divide the number
        {
          if (i%testing_u==0 && testing_u!==i) //If the diviser is not the number
          {
            are_you_prime =false; //Then the number ceases to be prime
          }
          
        }
      }
        if (are_you_prime==true )
          {
            console.log(i)
            //arr.push(i );
          }
             } 
}
prime_number_calculator(0,100);

//console.log(arr);

//var distorted = disorganize(arr);

//console.log(distorted);

//var x = distorted;

//get an array element 
//compare if it is smaller than all other elements
//if it is assign it index 0
//if not get the smallest and assign it 0
//continue with the next item

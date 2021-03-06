// Pseudo code

// Import the shuffler.js file after creating it
// Reffer to the prime checker function in the previous exercises but instead put the results in an array
// Sort the array in ascending order

const shuffle = require('./shuffler.js'); //import statemnet

//when calling the prime_number_calculator function initialise the paramater to  100

const prime_number_calculator = (x,y) => 
{
  var store_primes = []; //Initialize the array to empty

  for (var i=x; i<=y; i++)
  {
    if(i>=2)
    {

    var are_you_prime = true; //Assume the number is prime and test if this is really true

        for (var testing_u = 2; testing_u<=(i-1); testing_u++) //initialise counter to 2 because 1 will always divide the number
        {
          if (i%testing_u===0) //If the quotient
          {
            are_you_prime =false; //Then the number ceases to be prime
          }
         
        }
        if (are_you_prime==true)
          {
            store_primes.push(i);
          }
        }
  } return store_primes;

} 


var primes = prime_number_calculator(0, 100); //call the function giving it the range of numbers u want 

console.log("\nThis is my array of prime numbers" + "\n" +primes+"\n\n");

var distortedarray = shuffle(primes); //calling shuffle function to disorganize my array n storing it in a variable;

console.log("\nThe same array is now distorted" + "\n" +distortedarray+"\n\n");


/* ________________________Ok lets sort this array now ____________________________*/


var sorted_array = (array_to_sort)=>
  {
  var yo_sorted = []; //initialising an empty array that will hold my sorted values

  for (var c=0; Math.max(...array_to_sort) >= Math.max(...yo_sorted); c++){//if the max value in the array I am sorting >= to that in the sorted array, then

      var my_smallest = Math.min(...array_to_sort); //Variable to hold smallest now number value

    var my_smallest_index = array_to_sort.indexOf(my_smallest); //Get index of the above number value

    yo_sorted.push(my_smallest); //Saves the smallest number at the end of yo_sorted array

    array_to_sort.splice(my_smallest_index,1); //removes above element from array to sort

   }

  return yo_sorted; //after the loop it will return the sorted array

};

var get_organized_array = sorted_array(distortedarray);

console.log("I have it organised again!" +"\n" +get_organized_array);
 // The fizzbuzz project

 //Pseudo code
 /*
 ________________________________________________________________________
 1. Create a for loop initialize the value of the counter i to 1 condition less or equal to 100 increment by 1
 2. If i is divisible by both 3 and 5 print FizzBuzz
 3. If it is divisible by 3 print Fizz
 4. If it is divisible by 5 print Buzz
 5. Else print i
 ________________________________________________________________________
 */
 for (var i=1; i<=100; i++) //Implementing instruction 1
 {
    if(i%3===0 && i%5===0) console.log("FizzBuzz"); //Implementing instruction 2
    else if (i%3===0) console.log("Fizz"); //Implementing instruction 3
    else if (i%5===0) console.log("Buzz");  //Implementing instruction 4
    else console.log(i); //Implementing instruction 5
 }
//Pseudo code

/*
_____________________________________________________________________________________

Declare a variable to hold the birth date as a string .......for prompt is forbidden at this stage by instructor
Use the split function to separate the date and save it in anolther variable
Pick the year from the returned array using indexes and 
subtract it from the current year 2019 to get the age..........says instructor
pprint the above result
________________________________________________________________________________________
*/
var myBD = '11-01-1988';  //implementi line6
var splitit = myBD.split("-"); //implementi line7
var myAge = 2019 - splitit[2]; //implementi line8 n 9
console.log("Your current age is: " + myAge); //implementi line10
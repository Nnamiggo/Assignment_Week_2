//Pseudo code

/*
_____________________________________________________________________________________

Declare a variable to hold the birth date as a string .......for prompt is forbidden at this stage by instructor
Use the split function to separate the date and save it in anolther variable
Pick the year frolm the retujrned array using indexes and 
subtract it froml the current year 2019 to get the age..........says instructor
________________________________________________________________________________________
*/
var myBD = '11-01-1988'; 
var splitit = myBD.split("-");
var myAge = 2019 - splitit[2];
console.log("Your current age is: " + myAge);
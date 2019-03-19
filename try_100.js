Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again. The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

>> At first, we can assume that the visitor only inputs numbers and there’s no need to implement a special handling for a non-numeric input in this task.

++ As a bonus, Can you add that feature to your code.
//Pseudo code
/*
______________________________________________________________________________
Initialise a varible to hold the number that will be iniput by the user
Prompt the user to supply the number
While number is less than 100
do...i.e ask the user to try again

______________________________________________________________________________
*/

do {
// var input = "Enter a number grator than 100"
var input = 100; //assume he entered 100
}
While (input<=100)
{
	console.log ("It should be greater than 100");
	
}
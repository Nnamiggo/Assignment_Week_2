
    //My Pseudo code
    
    /*
    _________________________________________________________________________________________________

    Declare a constant to hold the (2.5/100) constant for it is a parcentange...after the comment
    Declare amountTendered variable initialising it to 100000
    Use console.log to print the following message: 'This is what the billed amount is (less transaction charges);'
    On the next line - again, use the console.log to print the result of the billed amount is which is as 
    a result of subtracting the transaction charge from the Amount tendered.
    submiting tthis file into a new repository called Intro to javascript requires submodules...complex topic!
    ________________________________________________________________________________________________________________
    */

    // This is the percentage that determines the transaction charge

    var myconstant = 0.025; //line 4

    var amountTendered = 100000; //line5

    console.log('This is what the billed amount is (less transaction charges)'); //line6

    var transactioncharge = amountTendered * myconstant;// line 7 n 8

    console.log(amountTendered - transactioncharge);// line 7 n 8    
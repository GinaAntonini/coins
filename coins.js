//Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

//first step is to define the value of quarter, dime, nickel, and penny

var quarters = 25
var dimes = 10
var nickels = 5
var pennies = 1

//next we need an empty purse where the values will be stored

var coinPurse = {
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
}

//now we need to create a function that will take our input amount and determine how many coins of each type

function coinCounter (inputAmount) {
var convertToCents = inputAmount * 100;
var quarterCount = Math.floor(convertToCents / quarters); //takes the input amount, divides by .25, then rounds down to nearest integer, giving number of quarters
convertToCents -= quarterCount * quarters; //takes the answer for inputAmount and multiply by quarter value, giving you the amount left over after
console.log(quarterCount);
coinPurse.quarters = quarterCount;


var dimeCount = Math.floor(convertToCents / dimes); 
convertToCents -= dimeCount * dimes;
console.log(dimeCount);
coinPurse.dime = dimeCount;


var nickelCount = Math.floor(convertToCents / nickels);
convertToCents -= nickelCount * nickels;
console.log(nickelCount);
coinPurse.nickel = nickelCount;

var pennyCount = Math.floor(convertToCents / pennies);
convertToCents -= pennyCount * pennies;
console.log(pennyCount);
coinPurse.penny = pennyCount;
}

coinCounter(1.99);  //here we are calling the function we just wrote and using an input amount to test the function
 


//

//   coinPurse.quarters = 0;



//   return coinPurse;


// var coins = coinCounter()
// console.log();
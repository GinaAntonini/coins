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

//first we need an empty purse

var quarters = 25
var dimes = 10
var nickels = 5
var pennies = 1

var coinPurse = {
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
}


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

coinCounter(1.99);  
 

// function getNumberOfQuarters (inputAmount) {

// }

// function getNumberOfQuarters (inputAmount) {
//   inputAmount / quarters;
//   var 
//   math.floor(inputAmount);
// }

// function getNumberOfDimes (inputAmount) {
//   inputAmount / dimes = inputAmount;
// }

// function getNumberOfNickels (inputAmount) {
//   inputAmount / nickels = inputAmount;
// }

// function getNumberOfPennies (inputAmount) {
//   inputAmount / pennies = inputAmount;
// }

//

//   coinPurse.quarters = 0;



//   return coinPurse;


// var coins = coinCounter()
// console.log();
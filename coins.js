//first step is to define the value of quarter, dime, nickel, and penny

var quarters = 25;
var dimes = 10;
var nickels = 5;
var pennies = 1;

//next we need an empty purse object where the values will be stored

var coinPurse = {
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
}

//now we need to create a function that will take our input amount and determine how many coins of each type: beginning with calculating how many quarters, subtracting that value from the input amount, then moving on to dime count, then nickel count, then penny count. 

function coinCounter (inputAmount) {
var convertToCents = inputAmount * 100; //the input amount is placed in a variable convertToCents. We're converting to cents since we are dealing with dollar and cents. 
var quarterCount = Math.floor(convertToCents / quarters); //takes the input amount, divides by 25, rounds down to nearest integer
convertToCents -= quarterCount * quarters; //takes the quarter count and multiplies by quarter value, giving you the amount left over to send down to the dime count
coinPurse.quarters = quarterCount;


var dimeCount = Math.floor(convertToCents / dimes); 
convertToCents -= dimeCount * dimes;
coinPurse.dimes = dimeCount;


var nickelCount = Math.floor(convertToCents / nickels);
convertToCents -= nickelCount * nickels;
coinPurse.nickels = nickelCount;

var pennyCount = Math.floor(convertToCents / pennies);
convertToCents -= pennyCount * pennies;
coinPurse.pennies = pennyCount;
}

coinCounter(1.99);  //here we are calling the function we just wrote and using an input amount to test the function and console logging to
console.log(coinPurse);



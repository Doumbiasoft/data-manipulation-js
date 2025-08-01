// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;

//------------------------- PART 1 --------------------------------
console.log(
  `\n🖥️------------------------- PART 1 -------------------------------- ✅`
);
let yesOrNo;

// Check if all numbers are divisible by 5. Cache the result in a variable.

const moduloValue = (nb) => nb % 5;
const isDivisibleBy5 =
  moduloValue(n1) + moduloValue(n2) + moduloValue(n3) + moduloValue(n4) === 0;
yesOrNo = isDivisibleBy5 ? "Yes" : "No";
console.log(`\n- Are all numbers divisible by 5?  ${yesOrNo}`);

// Check if the first number is larger than the last. Cache the result in a variable.

const isFirstNumberLargerThanLastNumber = n1 > n4;
yesOrNo = isFirstNumberLargerThanLastNumber ? "Yes" : "No";
console.log(
  `\n- Is the first number ${n1} larger than the last ${n4}? ${yesOrNo}`
);

// Accomplish the following arithmetic chain:
// * Subtract the first number from the second number.

const subtractResult = n2 - n1;
console.log(
  `\n- Subtraction of the first number ${n1} from the second number ${n2} is: ${subtractResult}`
);

// * Multiply the result by the third number.

const multiplyResult = subtractResult * n3;
console.log(
  `\n- Multiply the result ${subtractResult} by the third number ${n3} is: ${multiplyResult}`
);

// * Find the remainder of dividing the result by the fourth number.

const remainder = multiplyResult % n4;
console.log(`\n- The remainder of ${multiplyResult}/${n4} is: ${remainder}`);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.

const isLessThan25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
yesOrNo = isLessThan25 ? "Yes" : "No";
console.log(`\n- Are all numbers less than 25? ${yesOrNo}`);

//------------------------- PART2 ----------------------------------
console.log(
  `\n🖥️------------------------- PART 2 -------------------------------- ✅`
);

/**
 * 

Let’s look at a more practical scenario.

You are planning a cross-country road trip!

The distance of the trip, in total, is 1,500 miles.

Your car’s fuel efficiency is as follows:

At 55 miles per hour, you get 30 miles per gallon.

At 60 miles per hour, you get 28 miles per gallon.

At 75 miles per hour, you get 23 miles per gallon.

You have a fuel budget of $175.

The average cost of fuel is $3 per gallon.

**/

// Set up a program to answer the following questions:

const totalTripDistance = 1500; //miles
const budget = 175; //$
const fuelPerGallonPrice = 3; //$ fuel price per gallon

// Cases:

// Cases 1
const milesPerGallon_55 = 30; // miles per gallon
const speedPerHour_55 = 55; // miles per hour

// Cases 2
const milesPerGallon_60 = 28; // miles per gallon
const speedPerHour_60 = 60; // miles per hour

// Cases 3
const milesPerGallon_75 = 23; // miles per gallon
const speedPerHour_75 = 75; // miles per hour

const totalMilesPerGallon =
  milesPerGallon_55 + milesPerGallon_60 + milesPerGallon_75; //total miles per gallon

const totalSpeedPerHour = speedPerHour_55 + speedPerHour_60 + speedPerHour_75;

// How many gallons of fuel will you need for the entire trip?
const gallonsNeeded = totalTripDistance / totalMilesPerGallon;
console.log(
  `\n- Gallons of fuel needed for the entire trip are: ${gallonsNeeded.toFixed(
    2
  )}`
);

// Will your budget be enough to cover the fuel expense?
const fuelExpense = gallonsNeeded * fuelPerGallonPrice;
const isBudgetEnough = fuelExpense <= budget ? "Yes" : "No";

console.log(
  `\n- Will your budget be enough to cover the fuel expense?: ${isBudgetEnough}`
);

// How long will the trip take, in hours?
const tripDuration = totalTripDistance / totalSpeedPerHour;
console.log(
  `\n- How long will the trip take, in hours?: ${tripDuration.toFixed(
    2
  )} Hour(s)`
);

// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?

// Cases 1 : 55
const gallonsNeeded_55 = totalTripDistance / milesPerGallon_55;
const fuelExpense_55 = gallonsNeeded_55 * fuelPerGallonPrice;
const isBudgetEnough_55 = fuelExpense_55 <= budget ? "Yes" : "No";
const tripDuration_55 = totalTripDistance / speedPerHour_55;

// Cases 2 : 60
const gallonsNeeded_60 = totalTripDistance / milesPerGallon_60;
const fuelExpense_60 = gallonsNeeded_60 * fuelPerGallonPrice;
const isBudgetEnough_60 = fuelExpense_60 <= budget ? "Yes" : "No";
const tripDuration_60 = totalTripDistance / speedPerHour_60;

// Cases 3 : 75
const gallonsNeeded_75 = totalTripDistance / milesPerGallon_75;
const fuelExpense_75 = gallonsNeeded_75 * fuelPerGallonPrice;
const isBudgetEnough_75 = fuelExpense_75 <= budget ? "Yes" : "No";
const tripDuration_75 = totalTripDistance / speedPerHour_75;

// Log the results of your calculations using string concatenation or template literals.

const dataForTable = {};

dataForTable.One_Case_55 = {
  "Gallons Needed": gallonsNeeded_55.toFixed(2),
  "Fuel Expense($)": fuelExpense_55.toFixed(2),
  "Budget Enough": isBudgetEnough_55,
  "Trip Duration (hours)": tripDuration_55.toFixed(2),
};
dataForTable.Two_Case_60 = {
  "Gallons Needed": gallonsNeeded_60.toFixed(2),
  "Fuel Expense($)": fuelExpense_60.toFixed(2),
  "Budget Enough": isBudgetEnough_60,
  "Trip Duration (hours)": tripDuration_60.toFixed(2),
};
dataForTable.Three_Case_75 = {
  "Gallons Needed": gallonsNeeded_75.toFixed(2),
  "Fuel Expense($)": fuelExpense_75.toFixed(2),
  "Budget Enough": isBudgetEnough_75,
  "Trip Duration (hours)": tripDuration_75.toFixed(2),
};
console.log(
  `\n- Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?`
);
console.log(
  `\n🖥️ --------------------------- TABLE ---------------------------- ✅`
);
console.table(dataForTable);

// Class solution

// Declaring Variables
// Arithmetic (Math) Operators
// Logical Operators - && || !
// Compairson Operators

// What do we know?
// Total distance = 1500
// Fuel Eff
//  // at 55 mph - 30mpg
//  // at 60 mph - 28mpg
//  // at 75 mph - 23mpg
//  // budget = 175
// Avg Fuel Cost = 3 per gallon

// What can we infer?

//  What do I need to find?
// // gallons needed for trip?
// // // fuel effeciency
// // // totalDistance
//  //  // return: number, gallonsPerTrip

// Is our budget enough?
//  //  // fuelCostPerGallon
//  //  // gallons needed (from first question)
//  //  // totalBudget
//  //  //  //  return: boolean, yes its enough or no its not enough

// How long will is take in hours?
//  // speed
//  // total distance
//  //  // return: number, hours each trip will take.

// Variables

// Constant Variables
const totalDistance = 1500;
const _budget = 175;
const costPerGallon = 3;

// Other Variables
let speed = 55;
let mpg = 30;

// Find Total Fuel for Trip
const gallonsPerTrip = totalDistance / mpg;

console.log(
  `At ${speed}mph, you will need ${gallonsPerTrip} gallons of fuel, to travel ${totalDistance}`
);

// Is my budget enough?
const costPerTrip = gallonsPerTrip * costPerGallon; //Calculates total cost
console.log(
  `With a fuel efficiency of ${mpg}mpg, it would take ${gallonsPerTrip} gallons, which costs, $${costPerTrip}.`
);

const _isBudgetEnough = _budget >= costPerTrip; // compare to budget to let us know if we can afford
console.log(
  `With a budget of $${_budget}, it is ${_isBudgetEnough} that we can afford this trip. At that speed.`
);

// How long would this trip take?
const timeOfTrip = totalDistance / speed;
console.log(
  `At ${speed}mph it would take ${timeOfTrip}hrs to complete ${totalDistance} miles`
);

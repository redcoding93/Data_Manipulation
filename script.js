// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

//Vanessas Math problems part 1

// 1. Check if all numbers are divisible by 5. Cache the result in a variable.

// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isDivisibleBy5 = n1 % 5;
console.log(isDivisibleBy5);

const isDivisibleBy5Two = n2 % 5;
console.log(isDivisibleBy5Two);

const isDivisibleBy5Three = n3 % 5;
console.log(isDivisibleBy5Three);

const isDivisibleBy5Four = n4 % 5;
console.log(isDivisibleBy5Four);
 
// Check if the first number is larger than the last. Cache the result in a variable.
const firstAndLast = n1 > n4;
console.log(firstAndLast);

// Accomplish the following arithmetic chain:
// 1. Subtract the first number from the second number.
// 2. Multiply the result by the third number.
// 3. Find the remainder of dividing the result by the fourth number.
let subtraction = n1 - n2;
let multiply = subtraction * n3;
let remain = multiply / n4;
console.log(remain);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. 
// Rename the variable as appropriate.


// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 >! 25 || n2 >! 25 || n3 >! 25 || n4 >! 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

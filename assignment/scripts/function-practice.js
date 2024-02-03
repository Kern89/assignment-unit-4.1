console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log(helloName('Bender'));
// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber  
  // return firstNumber + secondNumber;
}
console.log(addNumbers(56,984675));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3
}
console.log(multiplyThree(2768,477,0));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log(isPositive(12));
console.log(isPositive(0));
console.log(isPositive(-3.1415926));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let words = ['blue', 'car','telephone', 'box']
function getLast(array) {
  return array[array.length-1]
}
console.log(getLast(words));
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let sample = ['sleep','skate','snow','paper','gauge'];


function search(list, item) {
    for (index = 0; index < list.length; index += 1) {
      if (list[index] === item) {
        return true;
      }
    }
    return false;
}
///browser test fails but function appears to work.
console.log(search(sample, 'snow'));
console.log(search(sample, 'tarp'));
console.log(search(sample, 'gauge'));
console.log(search(sample, 'farm'));
console.log(search(sample, 'skate'));

// function search(item) {
//   for (i=0; i<=sample.length-1; i++) {
//     if (sample[i] === item) {
//       return true
//     }
//     return false
//   }
// }
//https://stackoverflow.com/questions/237104/how-do-i-check-if-an-array-includes-a-value-in-javascript

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}

{/** //find the max number of arrat
function maxArray(arr) {
  return Math.max(...arr);
}

const number = [11, 13, 34, 43, 54, 3, 23, 34];
console.log("Max array is " + maxArray(number));

//===============================================

//palidrome

//console.log(arr)
function palindrome(str) {
  let arr = [];

  arr.push(...str.split(""));

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(palindrome("madam")); // true
console.log(palindrome("hello")); // false

//=========================================================================================

//4.Write a JavaScript program to reverse a given string.
function reverseString(str) {
  let reversed = str.split("").reverse().join("");

  return reversed;

  console.log(reverseString("dishan"));
}

//========================================================================================

//5. Write a JavaScript function that takes an array of numbers
//and returns a new array with only the even numbers.

let newArr = [];
function EvenNumber(num) {
  for (var i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

let arr1 = [10, 2, 23, 40, 5, 12];
EvenNumber(arr1);

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}

console.log(filterEvenNumbers(numbers));

//===========================================================================================================]
let value = 1;

6;
function factorialValue(num) {
  for (let i = 1; i <= num; i++) {
    value = value * i;
  }
  return value;
}

console.log(factorialValue(5));

//============================================================================================

//7.  Write a function that returns the sum of all numbers in an array.

function sumArray(arr) {
  return arr.reduce((tot, num) => tot + num, 0);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumArray(arr));

///===========================================================================================

//8.  Write a function that returns a new array containing
//only the unique elements from an input array

function getUniqueElements(arr) {
  return [...new Set(arr)];
}
const array = [1, 2, 3, 4, 3, 2, 5];
console.log(getUniqueElements(array)); // Output: [1, 2, 3, 4, 5] 

////====================================================================================================================

//Implement a function that finds the index of a specific element in an array. If
// the element is not found, the function should return -1.

function findElementIndex(arr, element) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return i;
      }
    }
  }
  
  const numbers = [10, 20, 30, 40, 50];
  
  console.log(findElementIndex(numbers, 30));
  */}
  
  //============================================================================================
  //============================================================================================
  //============================================================================================


function similarCharacters(str) {
  let arr = [];
  let duplicates = "";

  arr.push(...str.split(""));

  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicates = duplicates + arr[i];
      }
    }
  }
  return duplicates;
}
console.log(similarCharacters("dishangimhan"));
/* 1. Write a JavaScript function to calculate the sum of two numbers.    */

function sumOfTwoNumbers(a, b) { 

  return a + b; 

} 

/* 2.Write a JavaScript program to find the maximum number in an array. */ 
function findMaxNumber(arr) { 

  return Math.max(...arr); 

} 

/* 3.Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 
*/ 
function isPalindrome(str) { 

  const reversedStr = str.split('').reverse().join(''); 

  return str === reversedStr; 

}

 function isPalindrome(str) {
  for (let i = 0; i < str.length/2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
  

/* console.log(isPalindrome("hello")); // false  */

/*  5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.  */
function filterEvenNumbers(numbers) { 

  return numbers.filter(num => num % 2 === 0); 

}
 

/* 6.Write a JavaScript program to calculate the factorial of a given number. */ 

function factorial(number) { 

  if (number === 0 || number === 1) { 

    return 1; 

  } else { 

    return number * factorial(number - 1);

  } 

} 

/* 7. Write a JavaScript function to check if a given number is prime.  */


function isPrime(num) { 

  if (num <= 1) return false; 

  for (let i = 2; i <= Math.sqrt(num); i++) { 

    if (num % i === 0) return false; 

  } 

  return true; 

} 


/* 8.Same letters */

function getMatchingLetters(str) {
  const matches = [];
  const len = str.length;

  for (let i = 0; i < len; i++) {
    for (let j = i+1; j < len; j++) {
      if (str[i] === str[j]) {
        matches.push(str[i]);
      
        
      }
    }
  }

  return matches;
}
 console.log(getMatchingLetters("dishangimhan"));


 /* 9. Implement a function to find the sum of all the numbers in an array. 
 */

function findSum(arr) { 

  return arr.reduce((sum, num) => sum + num, 0); 

} 
/* 
10.Implement a function that finds the maximum number in an array.  */

function findMaxNumber(arr) { 

  let max = arr[0]; 

  for (let i = 1; i < arr.length; i++) { 

    if (arr[i] > max) { 

      max = arr[i]; 

    } 
  }

  return max;
}


/* 11.Write a function that returns a new array containing only the unique elements from an input array. */

function getUniqueElements(inputArray) { 

  return [...new Set(inputArray)]; 

} 

/* 12.Implement a function that returns the average value of numbers in an array.  */

function calculateAverage(numbers) { 

  let sum = 0; 

  for (let number of numbers) { 

    sum += number; 

  } 

  return sum / numbers.length; 

} 
/* 

13.Write a function that sorts an array of strings in alphabetical order. */ 

function sortStrings(arr) { 

  return arr.slice().sort(); 

}


14.



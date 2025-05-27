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

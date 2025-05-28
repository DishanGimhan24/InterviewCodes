{ 1./**function reverseInteger(num) {
    const reversedNumber = parseInt(num.toString().split('').reverse().join(''));
    return reversedNumber;
}

console.log(reverseInteger(1234));  // Output: 4321
 */}

{2. /*const arr = [1, 5, 3, 9, 2];

    function findMaxNumber(arr) {
        return Math.max(...arr);
    }
    
    console.log(findMaxNumber(arr)); */}

    //3. Write a JavaScript function to check if a
     //given string is a palindrome (reads the same 
        //forwards and backwards). 

    // 4.Write a JavaScript program to reverse a given string. 

      {/** function reverseString(str) {
            return str.split('').reverse().join('');
        }
        
        console.log(reverseString("dishan"));  // Output: "nahsid"
*/}  

     {/** function reverseInteger(num) {
            const isNegative = num < 0; // Check if the number is negative
            const reversedNumber = parseInt(Math.abs(num).toString().split('').reverse().join(''));
            return isNegative ? -reversedNumber : reversedNumber;
        }
        
        console.log(reverseInteger(1234));  // Output: 4321
        console.log(reverseInteger(-9876)); // Output: -6789
        */}   
        
 //5. Write a JavaScript function that takes an array of numbers 
 //and returns a new array with only the even numbers.    


 {/**numbers=[1,2,3,4,5,6,7,8,9,10];

 function filterEvenNumbers(numbers){
    return numbers.filter(num=>num%2===0);

   


 }
 console.log(filterEvenNumbers(numbers)); */}


 ///Write a JavaScript program to calculate the 
 //factorial of a given number. 
 
 {/** function factorial(num){
    if(num===0||num===1){
        return 1;
    }
    else{
        return num*factorial(num-1);   
    }
}

console.log(factorial(5)); //Output: 120

*/}
{/**function factorialValue(num) {
    let value = 1; // Initialize the factorial result as 1

    for (let i = 1; i <= num; i++) { // Loop from 1 to the given number
        value = value * i; // Multiply value by the current number
    }

    return value; // Return the final factorial value
}

console.log(factorialValue(6)); // Output: 720*/}

//JavaScript array coding questions

//Write a function that returns the sum of all numbers in an array. 

{/**function sumArray(arr){
    return arr.reduce((tot,num)=> tot+num,0);
}

const arr=[1,2,3,4,5,6,7,8,9,10];
console.log(sumArray(arr)); //Output: 55
 */}

//Implement a function that finds the maximum number in an array. 


{/** function maxNumber(arr){

    var max =arr[0];

    for(var i=0;i<arr.length;i++){
      
        if(max<arr[i]){
            max=arr[i]
        }
}

return max;
}

let arr=[1,20,3,45,59,65,75,4,9,10];

console.log(maxNumber(arr)); //Output: 75*/}


// Write a function that returns a new array containing 
//only the unique elements from an input array. ]

{/** function getUniqueElements(inputArray) { 
    return [...new Set(inputArray)]; 
}

const array = [1, 2, 3, 4, 3, 2, 5];
console.log(getUniqueElements(array)); // Output: [1, 2, 3, 4, 5]*/}

// Implement a functio
//that returns the average value of numbers in an array. 


{/**
    function calculateAverageOfArray(numbers){

    let sum=0;

    for(let number of numbers){
        sum+=number;
    }

    return sum/numbers.length;


  
}

const arr=[1,2,3,4,5,6,7,8,9,10];
console.log(calculateAverageOfArray(arr)); //Output: 5.5
 */}


//Implement a function that finds the index of a specific element in an array. If
// the element is not found, the function should return -1. 
{/**function findElementIndex(arr, element) {

    for(let i=0;arr.length;i++){
        if(arr[i]===element){
            return i;
        }
    }
    return -1;
  
}
const numbers = [10, 20, 30, 40, 50];
console.log(findElementIndex(numbers, 30));

 */}
/*
Question 1: 

Write a JavaScript function called reverseString that takes a string as input and returns the reversed version of the string. The function should reverse the order of characters in the string.

Example:
Input: "hello"
Output: "olleh"

Input: "world"
Output: "dlrow"
*/

function reverseString(strInput) {
    const reversed = strInput.split('').reverse().join('');
    return reversed;
}

//console.log(reverseString("Hello"));
//console.log(reverseString("World"));

/*
Question 2:

Write a JavaScript function called sumArray that takes an array of numbers as input and returns the sum of all the numbers in the array.

Example:
Input: [1, 2, 3, 4, 5]
Output: 15

Input: [10, -5, 7, 12]
Output: 24
*/

var arrNumbers = [1, 2, 3, 4, 5];

function sumArray(angArrNumbers) {
    var sum = 0;
    angArrNumbers.forEach(element => {
        sum += element;
    });

    return sum;
}

//console.log(sumArray(arrNumbers));

/*
Question 5:

Write a JavaScript function called removeDuplicates that takes an array as input and returns a new array with duplicate elements removed. The order of the elements in the resulting array should be preserved.

Example:
Input: [1, 2, 3, 2, 4, 1, 5]
Output: [1, 2, 3, 4, 5]

Input: [5, 7, 5, 9, 2, 7, 9]
Output: [5, 7, 9, 2]
*/

var arrInput = [1, 2, 3, 2, 4, 1, 5];

function removeDuplicates(arrInput) {
    function isUnique(value, index, array) {
        return array.indexOf(value) === index;
    }

    //usage example:
    var uniqueArray = arrInput.filter(isUnique);

    return uniqueArray;
}


//console.log(removeDuplicates(arrInput));


/*
Question 6:

Question:
Write a JavaScript function called findMax that takes an array of numbers as input and returns the maximum value in the array. The function should handle both positive and negative numbers.

Example:
Input: [1, 4, -2, 7, 0]
Output: 7

Input: [-10, -5, -3, -7]
Output: -3

*/

const numInputArraynumInputArray = [-10, -5, -3, -7];

function findMax(numInputArray){
    return Math.max(...numInputArray);
}

//console.log(findMax(numInputArraynumInputArray));

/*
Question 1:
Write a JavaScript function called isPalindrome that takes a string as input and returns true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.

Example:
Input: "racecar"
Output: true

Input: "hello"
Output: false
*/

function isPalindrome(strInput) {
    const reversed = strInput.split('').reverse().join('');

    if(strInput === reversed)
        return true;
    else   
        return false;
}

//console.log(isPalindrome("hello"));

/*
Question 2:
Write a JavaScript function called capitalizeWords that takes a sentence as input and returns a new sentence where the first letter of each word is capitalized. Assume that the input sentence consists of words separated by spaces.

Example:
Input: "hello world"
Output: "Hello World"

Input: "javascript is awesome"
Output: "Javascript Is Awesome"
*/

function capitalizeWords(strInput)
{
    var strCapitalizeWords = "";

    function toCapitalizeFirstLetter(strWord)
    {
        return strWord[0].toUpperCase();
    }

    const elementstrCapitalizedWords = strInput.split(' ');
    
    elementstrCapitalizedWords.forEach(element => {
        strCapitalizeWords += toCapitalizeFirstLetter(element) + element.slice(1) + " "
    });

    return strCapitalizeWords.trim();
}

//console.log(capitalizeWords("hello world"));

/*
Question 3:

Write a JavaScript function called flattenArray that takes a nested array as input and returns a new array with all the elements flattened into a single-level array. The function should handle arrays of any depth.

Example:
Input: [1, [2, [3, [4]], 5]]
Output: [1, 2, 3, 4, 5]

Input: [6, [7, 8], [9, [10, 11, [12]]]]
Output: [6, 7, 8, 9, 10, 11, 12]
*/
//const angArr = [1, [2, [3, [4]], 5]];

function flattenArray(arrInputArray){
    return arrInputArray.flat(Infinity);
}

//console.log(flattenArray(angArr));


/**
Question 4:

Write a JavaScript function called findDuplicates that takes an array as input and returns an array containing all the duplicate elements from the input array. The order of elements in the resulting array should be the same as in the input array.

Example:
Input: [1, 2, 3, 2, 4, 1, 5]
Output: [1, 2]

Input: [5, 7, 5, 9, 2, 7, 9]
Output: [5, 7, 9]
 */

const angArr2 = [1, 2, 3, 2, 4, 1, 5];

function findDuplicates(inputArray)
{
    const duplicateArr = [];

    for (const intArrIndex in inputArray)
    {
        for (const intArrIndex2 in inputArray)
        {
            if (intArrIndex != intArrIndex2)
            {
                if (inputArray[intArrIndex] == inputArray[intArrIndex2])
                {
                    if (duplicateArr.includes(inputArray[intArrIndex]) === false)
                    {
                        duplicateArr.push(inputArray[intArrIndex]);
                    }
                }
            }
        }
    }

    return duplicateArr;
}

//console.log(findDuplicates(angArr2));



/*
Question 5:
Write a JavaScript function called removeFalsyValues that takes an array as input and returns a new array with all falsy values removed. Falsy values include false, 0, "" (empty string), null, undefined, and NaN. The order of the remaining elements should be preserved.

Example:
Input: [1, null, "hello", 0, false, undefined, 42, NaN, ""]
Output: [1, "hello", 42]

Input: [false, "apple", null, 25, "", "orange", undefined]
Output: ["apple", 25, "orange"]
*/

const angArr5 = [false, "apple", null, 25, "", "orange", undefined];

function removeFalsyValues(inputArray)
{
    const cleanArray = [];
    
    inputArray.filter(element => {
        //console.log("element : " + element + " [type : " + typeof(element) + "]");

        switch(typeof(element)) {
            case "number": 
                //console.log("element: " + element + " [type: number]");
                if(element > 0)
                {
                    cleanArray.push(element);
                }
                break;
            case "string": 
                //console.log("element: " + element + " [type: string]");
                if(element.length > 0)
                {
                    cleanArray.push(element);
                }
                break;
            case "boolean":
                //console.log("element: " + element + " [type: boolean]");
                if(element === true)
                {
                    cleanArray.push(element);
                }
                break;
        }
    });

    return cleanArray;
}

//console.log(removeFalsyValues(angArr5));

/**
 * 
 * Question 6:
Write a JavaScript function called calculateAverage that takes an array of numbers as input and returns the average (mean) value of the numbers. Round the result to two decimal places.

Example:
Input: [5, 10, 15, 20]
Output: 12.50

Input: [1, 3, 5, 7, 9]
Output: 5.00
 */


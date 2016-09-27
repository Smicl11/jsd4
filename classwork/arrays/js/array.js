console.log("sanity check");

//creates new array
var a = [1, 3, 6, 9, 14, 23, 55];

a.forEach(add);

function add(number) {
  console.log(number);
}

// anonymous function
var days = ["Mon", "Tue", "Wed"];

days.forEach(function(day) {
  console.log(day);
});

/**
* Arrays
* Most of your answers should be stored in variables called q1, q2 etc..
* and the variables printed to the console.
*
* For example:
* var q0 = "abc"
* console.log("Question 0" + q0)
*/

/** Question 1
* Create an array of image source filenames.
* Use "image1.png", "image2.png", and "image3.png" as the array values.
*/
var q1 = ["image1.png", "image2.png", "image3.png"];
console.log("Question 1", q1);

/** Question 2
* Using the array from Question 1, store the first element of the array
* in variable q2.
*/
var q2 = q1[0];
console.log("Question 2", q2);

/** Question 3
* Get the length of the first array (number of elements in the array)
* and store it in variable q3
*/
var q3 = q1.length;
console.log("Question 3", q3);

/** Question 4
* Using the array from Question 1, store the last element of the array
* in variable q4. Hint: How can we get the number of elements in the array?
*/

var q4 = q1[q1.length-1];
console.log("Question 4", q4);


/**
* Question 5
* Create an array of numbers using 1, 2, 3, and 4 as values.
* Use a for loop, a forEach loop function to increase
* each value by 1. You can either store each new value back in the original
* array, or in a new array -- your choice. The end result should be
* an array of numbers with values 2, 3, 4, and 5.
*/
var nums = [1, 2, 3, 4];
var arr = [];

nums.forEach(function(nums) {
  arr.push(nums + 1);
});

console.log(arr);

// for (i = 0; i < nums.length; i++) {
//   nums = (nums[i] + 1);
// }

/**
* Question 6
* Using the array from Question 5, find the average of the numbers in the array
* (average = sum of all numbers/number of numbers). Store the average in q6.
*/

/*1. Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.*/
function include(arr, item) {
  return arr.includes(item);
}
/*2. You ask a small girl,"How old are you?" She always says, "x years old", 
where x is a random number between 0 and 9.
Write a program that returns the girl's age (0-9) as an integer.
Assume the test input string is always a valid string. For example, the test
input may be "1 year old" or "5 years old". The first character in the string 
is always a number.*/
function getAge(inputString) {
  let result = inputString.slice(0, 1);
  return parseInt(result);
}
/*3. Write a function that returns the total surface area and volume of a box as an array: [area, volume] */
function getSize(width, height, depth) {
  let volume = width * height * depth;
  let surfaceArea = 2 * width * height + 2 * height * depth + 2 * width * depth;
  return new Array(surfaceArea, volume);
}

/*1. Jenny has written a function that returns a greeting for a user.
However, she's in love with Johnny, and would like to greet him slightly 
different. She added a special case to her function, but she made a mistake.

Can you help her?
 */
function greet(name){
 
  if(name === "Johnny"){
    return "Hello, my love!";
    }
   return "Hello, " + name + "!";
}
/*2. Oh, no! The number has been mixed up with the text.
Your goal is to retrieve the number from the text, can
you return the number back to its original state?
Task

Your task is to return a number from a string.
Details

You will be given a string of numbers and letters mixed up, 
you have to return all the numbers in that string in the order 
they occur. */
var filterString = function (value) {
  let result = value.split("").filter((val) => {
    return /\d/g.test(val);
  });
  return parseInt(result.join(""));
};

/*1. This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

Add the value "codewars" to the array websites/Websites 1,000 times.
https://www.codewars.com/kata/525c1a07bb6dda6944000031
 */
// add the value "codewars" to the websites array 1,000 times
var websites = [];
for (let i = 0; i <= 999; i++) {
  websites.push("codewars");
}
/*2. Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
Example:
"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
https://www.codewars.com/kata/535474308bb336c9980006f2
*/
var greet = function (name) {
  let lowCapName = name.toLowerCase();
  let cappedName = name[0].toUpperCase();
  return `Hello ${cappedName}${lowCapName.slice(1)}!`;
};

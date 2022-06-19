/* 1. The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task

Given a year, return the century it is in.
Examples

1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/

function century(year) {
let output;
  year % 100 === 0
    ? (output = parseInt(year / 100))
    : (output = parseInt(year / 100) + 1);
  return output;
}


/* 2. Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"

Names given are always valid strings.
 */

function areYouPlayingBanjo(name) {
  let removeCase = name.toUpperCase();
  let output;
  removeCase.startsWith("R")
    ? (output = name + " plays banjo")
    : (output = name + " does not play banjo");
  return output;
}

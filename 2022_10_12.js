/*1. Variable assignment

Fix the variables assigments so that this code stores the string 'devLab' in the variable name.
*/
var a = "dev"
var b = "Lab"

var name = a + b
/*2. Your goal is to return multiplication table for number that is always an integer from 1 to 10.
For example, a multiplication table (string) for number == 5 looks like below: */
function multiTable(number) {
  let result = "";
  for (let i = 1; i < 11; i++) {
    result += `${i} * ${number} = ${i * number}\n`;
  }
  console.log(result.length - 2, result.length);
  return result.substring(0, result.length - 1);
}

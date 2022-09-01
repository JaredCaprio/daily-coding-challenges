/*1. Complete the function that receives as input a string, and produces outputs according to the following table:
Input 	Output
"Jabroni" 	"Patron Tequila"
"School Counselor" 	"Anything with Alcohol"
"Programmer" 	"Hipster Craft Beer"
"Bike Gang Member" 	"Moonshine"
"Politician" 	"Your tax dollars"
"Rapper" 	"Cristal"
anything else 	"Beer"
Note: anything else is the default case:
if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. 
For example, the input "pOLitiCIaN" should still return "Your tax dollars".
*/
function getDrinkByProfession(param) {
  let lowerParam = param.toLowerCase();
  switch (lowerParam) {
    case "jabroni":
      return "Patron Tequila";
      break;
    case "school counselor":
      return "Anything with Alcohol";
      break;
    case "programmer":
      return "Hipster Craft Beer";
      break;
    case "bike gang member":
      return "Moonshine";
      break;
    case "politician":
      return "Your tax dollars";
      break;
    case "rapper":
      return "Cristal";
      break;
    default:
      return "Beer";
      break;
  }
}
/*2.Given two numbers and an arithmetic operator (the name of it, as a string), return the result
of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation,
and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5

Try to do it without using if statements!
 */

function arithmetic(a, b, operator) {
  let lowerOp = operator.toLowerCase();

  return lowerOp === "add"
    ? a + b
    : lowerOp === "subtract"
    ? a - b
    : lowerOp === "divide"
    ? a / b
    : lowerOp === "multiply"
    ? a * b
    : console.log("no");
}

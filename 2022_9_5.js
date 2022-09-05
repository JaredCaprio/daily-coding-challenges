/*1. Grasshopper - Function syntax debugging

A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.
 */
function main (verb, noun){
  return verb + noun
}
/*2. Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"*/
function printArray(array) {
  return array.join(",");
}
/*3. Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.
Please use the following function names:
addition = add
multiply = multiply
division = divide (both integer and float divisions are accepted)
modulus = mod
exponential = exponent
subtraction = subt */
function add(a,b){
    return a + b;
}

function divide(a,b){
    return a / b;
}

function multiply(a,b){
    return a * b
}

function mod(a,b){
    return a % b;
}
   
function exponent(a,b){
    return Math.pow(a, b)
}
    
function subt(a,b){
    return a - b;
}


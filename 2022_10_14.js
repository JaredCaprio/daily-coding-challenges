/*1. You love coffee and want to know what beans you can afford to buy it.
The first argument to your search function will be a number which represents your budget.
The second argument will be an array of coffee bean prices.
Your 'search' function should return the stores that sell coffee within your budget.
The search function should return a string of prices for the coffees beans you can afford. 
The prices in this string are to be sorted in ascending order.
 */
function search(budget, prices) {
  return prices
    .filter((item) => item <= budget)
    .sort((a, b) => a - b)
    .join(",");
}
/*2. Time to test your basic knowledge in functions! Return the odds from a list: */
function odds(values) {
  return values.filter((num) => num % 2 === 1);
}

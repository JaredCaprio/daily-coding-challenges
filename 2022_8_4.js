/*1. I created this function to add five to any number 
that was passed in to it and return the new value. 
It doesn't throw any errors but it returns the wrong number.
Can you help me fix the function?*/
function addFive(num) {
  var total = num + 5;
  return total;
}
/* 2. Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, 
function accept 1 parameters:n, n is the number of customers to 
buy hotdogs, different numbers have different prices (refer to the
following table), return a number that the customer need to pay how much money.*/

function saleHotdogs(n) {
  let dogPrice;
  n < 5
    ? (dogPrice = 100)
    : n >= 5 && n < 10
    ? (dogPrice = 95)
    : n >= 10
    ? (dogPrice = 90)
    : null;
  return dogPrice * n;
}


/*1. https://www.codewars.com/kata/57f7b8271e3d9283300000b4/train/javascript

Given a string of digits confirm whether the sum of all the individual even digits are greater than the
sum of all the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same"
*/
function evenOrOdd(str) {
  let even = 0;
  let odd = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 === 0) {
      even += parseInt(str[i]);
    } else {
      odd += parseInt(str[i]);
    }
  }
  console.log(even, odd);
  return even > odd
    ? "Even is greater than Odd"
    : odd > even
    ? "Odd is greater than Even"
    : "Even and Odd are the same";
}

/*2. https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
Examples (Input --> Output)

"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/
function validatePIN(pin) {
  return (
    (/^\d+$/g.test(pin) && pin.length === 4) ||
    (/^\d+$/g.test(pin) && pin.length === 6)
  );
}

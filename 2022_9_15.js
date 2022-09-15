/*1. Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

 */

function longest(s1, s2) {
  let combined = s1 + s2;
  let split = combined.split("");
  let sorted = split.sort();
  let aSet = new Set(sorted);
  return Array.from(aSet).join("");
}


/*1 . Inspired by the development team at Vooza, write the function that
    accepts the name of a programmer, and
    returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18,
which is an awesome number of lightsabers. Anyone else owns 0.
Note: your function should have a default parameter.*/
function howManyLightsabersDoYouOwn(name) {
  if (name == "Zach"){
    return 18
  } else {
    return 0
  }
}

/*2. Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105

Zero alone is fine, don't worry about it. Poor guy anyway
*/
function noBoringZeros(n) {
  if (n === 0) {
    return 0;
  }
  let result = n.toString().replace(/0+$/g, "");
  return parseInt(result);
}

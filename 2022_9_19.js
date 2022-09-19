/* 1. Create a combat function that takes the player's current health and the amount of damage recieved,
and returns the player's new health. Health can't be less than 0. */
function combat(health, damage) {
  let weekend = health - damage;
  if (weekend >= 0) {
    return weekend;
  } else {
    return 0;
  }
}
/* 2.Your task is simply to count the total number of lowercase letters in a string. */
function lowercaseCount(str) {
  let results = [];

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
      results.push(str[i]);
    }
  }
  return results.length;
}

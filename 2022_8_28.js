/*1. Your coworker was supposed to write a simple helper function to capitalize a string 
(that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper 
function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function.
The string lengths will be from 1 character up to 10 characters, but will never be empty.
*/
function capitalizeWord(word) {
  let final = word[0].toUpperCase();
  return final + word.slice(1);
}
/*2.Create a method sayHello/say_hello/SayHello that takes as input a name, city,
and state to welcome a person. Note that name will be an array consisting of one
or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:
sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')

This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
 */
function sayHello(name, city, state) {
  if (name.length > 2) {
    return `Hello, ${name[0]} ${name[1]} ${name[2]}! Welcome to ${city}, ${state}!`;
  } else {
    return `Hello, ${name[0]} ${name[1]}! Welcome to ${city}, ${state}!`;
  }
}
/*3. Create a method sayHello/say_hello/SayHello that takes as input a name, city,
and state to welcome a person. Note that name will be an array consisting of one or 
more values that should be joined together with one space between each, and the length
of the name array in test cases will vary.
Example:
sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
 */
function sayHello(name, city, state) {
  if (name.length < 3) {
    return `Hello, ${name[0]} ${name[1]}! Welcome to ${city}, ${state}!`;
  } else if (name.length < 4) {
    return `Hello, ${name[0]} ${name[1]} ${name[2]}! Welcome to ${city}, ${state}!`;
  } else if (name.length < 5) {
    return `Hello, ${name[0]} ${name[1]} ${name[2]} ${name[3]}! Welcome to ${city}, ${state}!`;
  }
}


/* 4. It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going 
to make the most money?
Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money 
and must receive only his stated salary.
Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala and Julia), 
"$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).
*/
function bonusTime(salary, bonus) {
  return bonus ? "£" + salary * 10 : "£" + salary
}


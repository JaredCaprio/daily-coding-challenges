/*1. https://www.codewars.com/kata/537400e773076324ab000262/train/javascript
Your job is to group the words in anagrams.
What is an anagram ?

star and tsar are anagram of each other because you can rearrange the letters for star to obtain tsar.
Example

A typical test could be :

// input
groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]);

// output
[
  ["tsar", "star", "tars"],
  ["rat", "tar"],
  ["cheese"]
]
*/
function groupAnagrams(words){
  return words.reduce(function (groups, word){
    for (let i = 0; i < groups.length; i++){
      if (areAnagrams(groups[i][0], word)){
        groups[i].push(word);
        return groups;
      }      
    }
    groups.push([word]);
      return groups;
  }, [])
  function areAnagrams(a,b) {
    return a.split('').sort().join('') === b.split('').sort().join('')
  }
}

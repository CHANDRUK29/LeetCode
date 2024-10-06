/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // approach 1
  const counter = {};
  for (let i = 0; i < magazine.length; i++) {
    counter[magazine[i]] = (counter[magazine[i]] || 0) + 1;
  }
  for (let j = 0; j < ransomNote.length; j++) {
    if (!counter[ransomNote[j]]) return false;
    else counter[ransomNote[j]] -= 1;
  }

  return true;

  //approach 2

  for (const char of magazine) {
    ransomNote = ransomNote.replace(char, "");
  }
  if (!ransomNote) return true;
  else return false;
};

console.log(canConstruct("a", "b"))
console.log(canConstruct("aa", "ab"))
console.log(canConstruct("aa", "aab"))
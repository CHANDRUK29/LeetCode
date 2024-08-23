/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

//solution using map method
var groupAnagrams = function (strs) {
  if (strs.length < 2) {
    return [strs]
  }
  let map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const split = strs[i].split('').sort().join('')
    if (!map.has(split)) {
      map.set(split, [])
    }
    map.get(split).push(strs[i])
  }
  return Array.from(map.values())
};


//solution using obj 
var groupAnagrams = function (strs) {
  if (strs.length < 2) {
    return [strs]
  }
  let Obj = {}
  let array = []
  for (let i = 0; i < strs.length; i++) {
    const split = strs[i].split('').sort().join('')
    if (!Obj[split]) {
      Obj[split] = []
    }
    Obj[split].push(strs[i])
  }
  return Object.values(Obj)
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))

/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//   if (s.length != t.length) return false
//   function sort(arr) {
//     if (arr.length < 2) {
//       return arr;
//     }
//     let mid = Math.floor(arr.length / 2)
//     let leftArr = arr.slice(0, mid)
//     let rightArr = arr.slice(mid)
//     return merge(sort(leftArr), sort(rightArr))
//     function merge(leftArr, rightArr) {
//       let sortedArr = []
//       while (leftArr.length && rightArr.length) {
//         if (leftArr[0] <= rightArr[0]) {
//           sortedArr.push(leftArr.shift())
//         } else {
//           sortedArr.push(rightArr.shift())
//         }
//       }
//       return [...sortedArr, ...leftArr, ...rightArr]
//     }
//   }
//   let sortarr1 = sort(s.split(""))
//   let sortarr2 = sort(t.split(""))
//   for (let i = 0; i < sortarr1.length; i++) {
//     if (sortarr1[i] != sortarr2[i]) return false
//   }
//   return true;
// };

var isAnagram = function (a, b) {
    if (a.length != b.length) {
    return false;
  }
  let map = new Map();
  for (let i = 0; i < a.length; i++) {
    if (map.has(a[i])) {
      map.set(a[i], map.get(a[i]) + 1);
    } else {
      map.set(a[i], 1);
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (map.has(b[i])) {
      map.set(b[i], map.get(b[i]) - 1);
    }
  }
  let keys = map.keys();
  for (let key of keys) {
    if (map.get(key) != 0) {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("anagram","nagaram"))
/*
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let start = 0;
    let end = 0
    let maxLen = Math.min(s.length, 1);
    let set = new Set();
    while (end < s.length) {
        let char = s.charAt(end);
        while (set.has(char)) {
            set.delete(s.charAt(start));
            start += 1;
        }
        set.add(char);
        let size = end - start + 1;
        maxLen = Math.max(maxLen, size);
        end += 1;
    }
    return maxLen;
};
console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
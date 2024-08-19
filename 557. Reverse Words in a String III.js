/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
Input: s = "Mr Ding"
Output: "rM gniD"
 
Constraints:

1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.
*/


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let strArr = s.split(" ")
    var reverseString = function (s) {
        // reverse the string Array
        for (let i = 0; i < s.length - 1 - i; i++) {
            [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]]
        }
        // console.log(s)
        return s.join("");
    };
    let str = ""
    for (let i = 0; i < strArr.length; i++) {
        let array = reverseString(strArr[i].split(''))
        console.log("arr", array)
        str += `${array} `
    }
    // console.log(str)
    return str.trim();
};

console.log(reverseWords("Let's take LeetCode contest"))
console.log(reverseWords("Mr Ding"))
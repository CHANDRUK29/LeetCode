/*
Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

Example 1:

Input: s = "Hello"
Output: "hello"
Example 2:

Input: s = "here"
Output: "here"
Example 3:

Input: s = "LOVELY"
Output: "lovely"

Constraints:

1 <= s.length <= 100
s consists of printable ASCII characters.

*/

/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
    let arr = s.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= "A" && arr[i] <= "Z") {
            let value = arr[i].charCodeAt() + 32
            arr[i] = String.fromCharCode(value)
        }
    }
    return arr.join("");
};
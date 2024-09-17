/*
A sentence is a string of single-space separated words where each word consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

Example 1:

Input: s1 = "this apple is sweet", s2 = "this apple is sour"

Output: ["sweet","sour"]

Explanation:

The word "sweet" appears only in s1, while the word "sour" appears only in s2.

Example 2:

Input: s1 = "apple apple", s2 = "banana"

Output: ["banana"]

 

Constraints:

1 <= s1.length, s2.length <= 200
s1 and s2 consist of lowercase English letters and spaces.
s1 and s2 do not have leading or trailing spaces.
All the words in s1 and s2 are separated by a single space.
*/


/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let obj = {}
    let array = []
    let str = s1.concat(` ` + s2)
    let sptS1 = str.split(' ')
    for (let i = 0; i < sptS1.length; i++) {
        if (obj[sptS1[i]]) {
            obj[sptS1[i]]++
        } else {
            obj[sptS1[i]] = 1;
        }
    }
    for (let i = 0; i < Object.values(obj).length; i++) {
        if (Object.values(obj)[i] == 1) {
            array.push(Object.keys(obj)[i])
        }
    }
    return array;
};

uncommonFromSentences("this apple is sweet", "this apple is sour")
uncommonFromSentences("apple apple", "banana")
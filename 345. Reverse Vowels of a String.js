/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"

 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    // let vowels = { 'a': true, 'e': true, 'i': true, 'o': true, 'u': true, 'A': true, 'E': true, 'I': true, 'O': true, 'U': true };
    // let splitArr = s.split('');
    // let l = 0;
    // let r = s.length - 1;
    // while (l < r) {
    //     if (vowels[splitArr[l]] && vowels[splitArr[r]]) {
    //         [splitArr[l], splitArr[r]] = [splitArr[r], splitArr[l]]
    //         l++;
    //         r--
    //     } else if (vowels[splitArr[l]]) {
    //         r--;
    //     } else {
    //         l++;
    //     }
    // }

    // console.log(splitArr.join(''))


    //solution using set
    let left = 0;
    let right = s.length - 1;
    const VOWELS = new Set(["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"])
    const arr = [...s];
    while (left < right) {
        if (!VOWELS.has(arr[left]))
            left++;
        if (!VOWELS.has(arr[right]))
            right--;
        if (VOWELS.has(arr[left]) && VOWELS.has(arr[right])) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--;
        }
    }
    console.log(arr.join(''))
    return arr.join("");

};

reverseVowels('IceCreAm')
reverseVowels('leetcode')
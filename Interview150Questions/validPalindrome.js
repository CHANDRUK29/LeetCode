/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  console.log(str)
  let k = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[k]) {
      return false
    }
    k--;
  }
  return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(""))


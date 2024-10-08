/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 
Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109 
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {

    //solution 1

    // let obj = {}
    // for (let i = 0; i < nums.length; i++) {
    //     if (obj[nums[i]]) {
    //         obj[nums[i]]++;
    //     } else {
    //         obj[nums[i]] = 1
    //     }
    // }
    // for(const [key,value] of Object.entries(obj)){
    //     if(value>1){
    //         return true
    //     }
    // }
    // return false

    //solution 2
    return new Set(nums).size !== nums.length;
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,2,3,1]))
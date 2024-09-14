/*
You are given an integer array nums of size n.

Consider a non-empty subarray from nums that has the maximum possible bitwise AND.

In other words, let k be the maximum value of the bitwise AND of any subarray of nums. Then, only subarrays with a bitwise AND equal to k should be considered.
Return the length of the longest such subarray.

The bitwise AND of an array is the bitwise AND of all the numbers in it.

A subarray is a contiguous sequence of elements within an array.

 

Example 1:

Input: nums = [1,2,3,3,2,2]
Output: 2
Explanation:
The maximum possible bitwise AND of a subarray is 3.
The longest subarray with that value is [3,3], so we return 2.
Example 2:

Input: nums = [1,2,3,4]
Output: 1
Explanation:
The maximum possible bitwise AND of a subarray is 4.
The longest subarray with that value is [4], so we return 1.
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 106
*/


/*
core logic behind the sum is we have to find largest bitwise AND with the given array 
length of the sub array which has maximum bitwise AND

Note:  As we know AND operator core idea is 

A & B ==> C

Where C <= A

A= 1010
  &
B= 1000
---------
C= 1000

Where is C is <= A

First we need to find the maximum value in and array so that it will be the maximum obivously in AND operation 
Then we can look for sub array that contains the same maximum value and return their length

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let max = -1;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
    }
    console.log(max)
    let length = 0;
    let maxLength = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == max) {
            length++
            maxLength = Math.max(length, maxLength)
        } else {
            length = 0
        }
    }
    console.log(maxLength)
};

longestSubarray([1, 2, 3, 3, 2, 2])
longestSubarray([1, 2, 3, 4])
longestSubarray([311155, 311155, 311155, 311155, 311155, 311155, 311155, 311155, 201191, 311155])
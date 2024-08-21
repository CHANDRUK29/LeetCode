/*
Given two integer arrays nums1 and nums2, return an array of their 
intersection
. Each element in the result must be unique and you may return the result in any order.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000



*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    // Solution ONE -- 70 MS & 50.50MB
    let array = []
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] == nums2[j]) {
                array.push(nums1[i])
                break;
            }
        }
    }
    const uniqueArr = []
    array.forEach((data) => {
        if (!uniqueArr.includes(data)) {
            uniqueArr.push(data)
        }
    })
    console.log(uniqueArr)
    return uniqueArr;


    // Solution TWO -- 59 MS & 50.84MB
    let map = {}
    let array = []
    for (let i = 0; i < nums1.length; i++) {
        map[nums1[i]] = true
    }
    for (let j = 0; j < nums2.length; j++) {
        if (map[nums2[j]]) {
            array.push(nums2[j])
            map[nums2[j]] = false
        }
    }
    console.log(array)
    return array;


    //solution Three -- 66ms & 51.74MB
    let set1 = new Set(nums1);
    let set2 = new Set()

    for (const num of nums2) {
        if (set1.has(num)) {
            set2.add(num)
        }
    }
    console.log(Array.from(set2))
    return Array.from(set2)
};




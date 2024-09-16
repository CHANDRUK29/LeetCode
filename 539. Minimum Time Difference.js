/*
Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.

Example 1:

Input: timePoints = ["23:59","00:00"]
Output: 1
Example 2:

Input: timePoints = ["00:00","23:59","00:00"]
Output: 0
 

Constraints:

2 <= timePoints.length <= 2 * 104
timePoints[i] is in the format "HH:MM".
*/

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    let minsArr = timePoints.map((val) => {
        let timeData = val.split(':').map(d => Number(d))
        return timeData[0] * 60 + timeData[1]
    });
    minsArr.sort((a, b) => a - b)
    let timeDiff = Infinity;
    for (let i = 0; i < minsArr.length - 1; i++) {
        timeDiff = Math.min(timeDiff, minsArr[i + 1] - minsArr[i])
    }
    // total min in a day ==> 24*60 = 1440
    timeDiff = Math.min(timeDiff, 24 * 60 - minsArr[minsArr.length - 1] + minsArr[0])
    return timeDiff;
};

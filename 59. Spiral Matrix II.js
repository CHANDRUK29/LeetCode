/*
Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

Example 1:

Input: n = 3
Output: [[1,2,3],[8,9,4],[7,6,5]]
Example 2:

Input: n = 1
Output: [[1]]
 

Constraints:

1 <= n <= 20
*/


/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const arr = Array.from({ length: n }, () => []);
    let row = 0;
    let col = 0;
    let colEnd = n - 1;
    let rowEnd = n - 1;
    let counter = 1;

    while (row <= rowEnd && col <= colEnd) {
        for (let i = col; i <= colEnd; i++) {
            arr[row][i] = counter;
            counter++;
        }
        row++;
        for (let i = row; i <= rowEnd; i++) {
            arr[i][colEnd] = counter;
            counter++;
        }
        colEnd--;

        for (let i = colEnd; i >= col; i--) {
            arr[rowEnd][i] = counter;
            counter++
        }
        rowEnd--;

        for (let i = rowEnd; i >= row; i--) {
            arr[i][col] = counter;
            counter++;
        }
        col++;
    }
    return arr;
};

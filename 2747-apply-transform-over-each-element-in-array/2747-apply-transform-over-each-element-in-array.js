/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    arr.forEach((element, i) => {
        arr[i] = fn(element, i);
    })
    return arr;
};
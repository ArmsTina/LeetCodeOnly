/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr = [];
    arr.forEach((element, i) => {
        if(fn(element, i)){
            filteredArr.push(element);
        }
    })
    return filteredArr;
};
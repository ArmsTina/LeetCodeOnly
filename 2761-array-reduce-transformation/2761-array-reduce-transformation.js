/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
     let answer = init;
     nums.forEach((num)=>{
        answer = fn(answer, num);
     });
     return answer;
};
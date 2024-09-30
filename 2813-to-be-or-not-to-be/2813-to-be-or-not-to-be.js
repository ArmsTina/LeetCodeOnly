/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return{
        toBe: function(n){
            if(val !== n){
                throw('Not Equal');
            }
            return val === n;
        },
        notToBe: function(n){
            if(val === n){
                throw('Equal');
            }
            return val !== n;
        }
    }
}


/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
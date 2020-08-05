console.log("Hello");
console.log('Num : %d, String : %s, Object : %j',10,'Hello',{Name:'Hello'});

var calc = {};
exports.add = function(a,b){
    return a + b;
}
exports.multiply = function(a,b){
    return a* b;
}

module.exports = calc;

var nconf = require('nconf');
nconf.env();
console.log('%s',nconf.get('OS'));

function fibonacci(num) {
    "use strict";
    var answer = 0;
   if (num <= 1) {
      return num;
   }
    answer = fibonacci(num - 1) + fibonacci(num - 2);
   return answer;
}

/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/

var a = fibonacci(8);

console.log(a);
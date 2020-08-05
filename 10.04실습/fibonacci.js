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
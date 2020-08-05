var http = require('http');

var server = http.createServer();

var port = 5000;

server.listen(port, function(){
    console.log('start');
});

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


server.on('request', function(req,res){
    res.writeHead(200, {"content_Type": "text/html; charset=utf-8"});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write(" <head>");
    res.write("     <title>page</title>");
    res.write(" </head>");
    res.write(" <body> ");
    res.write(" <h1> hello </h1>");
    res.write(" </body>");
    res.write(" </html>");
    res.end();
});
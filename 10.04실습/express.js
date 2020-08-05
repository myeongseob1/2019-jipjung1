var express = require('express');
var ejs = require('ejs');
var app = express();
var fs = require('fs');

app.set('port', 1001);
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.get('/', function(req,res){
    res.render('draw.html');
});

app.get('/imgs', function(req,res){
    fs.readFile('1.png', function(error, data){
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.end(data);
    });
});

app.get('/cal', function(req,res){
    res.render('fibonacci.html');
});
 
var server = app.listen(1001, function(){
    console.log("Express server has started on port 5001")
});
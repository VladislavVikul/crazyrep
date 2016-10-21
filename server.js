'use strict';
var url = require('url');
var http = require('http');
var fs = require('fs');
var counter = 0;
setInterval(function() {
	counter += 500;
}, 5000);
http.createServer(function(req, res){
	var uri = url.parse(req.url).pathname;
	if (uri.length === 1 || uri.length === 0) {
		uri = '/index.html';
	}
	res.writeHead(200);
	if (uri !== '/get') {
		res.write(fs.readFileSync('C:\\Users\\Пкашка\\Desktop\\СайтН\\' + uri));
	} else {
		res.write(counter.toString());
	}
	res.end()
}).listen(80);
console.log('Server Start...');
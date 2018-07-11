var express = require("express");
var app = express();
var server = require('http').createServer(app);
var fs = require('fs');
var dir =  process.cwd();
var port = process.env.PORT || 3000;

app.use(express.static(dir));//public dir

var obj;

fs.readFile(dir+"/public/data.json", 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});

app.get("/api", (req, res, next) => {
	res.json(obj);
});

server.listen(port, function () {
	console.log('Server listening at port %d', port);
});

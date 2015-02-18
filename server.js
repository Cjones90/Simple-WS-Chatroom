var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");
var port = process.env.PORT || 2000;

var server = http.createServer(function (req, res) {
	var extname = path.extname(url.parse(req.url).pathname);
	contentType = "text/html";
	var file = (url.parse(req.url).pathname).slice(1, this.length);
	if(extname !== ".js" && extname !== ".jsx") {
		file = "index.html";
	}
	switch(extname) {
		case ".js": contentType = "text/javascript";
		case ".jsx": contentType = "text/javascript";
		break;
		default: contentType = "text/html";
	}
	res.writeHead(200, {"Content-Type": contentType})
	res.end(fs.readFileSync(file));
});

server.listen(port);
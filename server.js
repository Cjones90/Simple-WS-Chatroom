'use strict';

const http = require('http')
const fs = require('fs');
const wsServer = require("./ws.js")
const port = process.env.PORT || 8080;

module.exports = {
  startServer: function() {
		console.log("Server started")
    wsServer.init(port);
    http.createServer((req, res) => {
		console.log("Http req1")
			if(req.url.indexOf('ajaxPort') > -1){
        res.setHeader('Access-Control-Allow-Origin', '*')
				res.end(port);
			}
			console.log("Http req2")
      let input = '';
      req.on('data', (buffer) => {
        input += buffer.toString();
      })
      req.on('end', () => {
        res.setHeader('Access-Control-Allow-Origin', '*')
				res.setHeader('content-type', 'text/html')
        res.end(fs.readFileSync('index.html'));
      })

    }).listen(port, console.log(`Listening on port ${port}`))
  }
}

if(!module.parent) {
  module.exports.startServer();
}

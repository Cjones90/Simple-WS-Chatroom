'use strict';

const http = require('http')
const fs = require('fs');
const wsServer = require("./ws.js")
const port = process.env.PORT || 8080;

module.exports = {
  startServer: function() {
		console.log("Server started")
    let server = http.createServer((req, res) => {
			console.log("Http req1")
			if(req.url.indexOf('ajaxPort') > -1) {
        res.setHeader('Access-Control-Allow-Origin', '*')
				res.end(port);
				return;
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
    wsServer.init(server, port);
  }
}

if(!module.parent) {
  module.exports.startServer();
}

// var WebSocketServer = require("ws").Server
// var http = require("http")
// var express = require("express")
// var app = express()
// var port = process.env.PORT || 5000
//
// app.use(express.static(__dirname + "/"))
//
// var server = http.createServer(app)
// server.listen(port)
//
// console.log("http server listening on %d", port)
//
// var wss = new WebSocketServer({server: server})
// console.log("websocket server created")
//
// wss.on("connection", function(ws) {
//   var id = setInterval(function() {
//     ws.send(JSON.stringify(new Date()), function() {  })
//   }, 1000)
//
//   console.log("websocket connection open")
//
//   ws.on("close", function() {
//     console.log("websocket connection close")
//     clearInterval(id)
//   })
// })

# WS

Simple websocket chatroom server


I'll add the client end to this or another repo soon enough.

You can either:

A) Use as is:  
* Put this repo on a server, `npm i`, `npm start`, the server's running on port 8080.  
* Communicate with it using
`wss://subdomain.yourdomain.whatever:8080/somechatroomname` (it runs on port 8080 by default)  

***Note:*** If using on Heroku, omit the port number. Heroku uses `process.env.PORT` for routing requests.


B) Take the `ws.js` file, include `const wsServer = require("./ws.js")` at the top
of your nodejs server file. Make sure you invoke your server like so:
```js
let server = http.createServer((req, res) => {
  /* server logic */
}).listen(portNumber)
```

Then just add `wsServer.init(server);` right under it so the whole thing looks like:

```js
let server = http.createServer((req, res) => {
  /* server logic */
}).listen(portNumber)
wsServer.init(server);
```

Now you can communicate with the WSS using your server url and prepending `wss://` instead of `http://`. For example `wss://ws-nodejs.herokuapp.com`.

So on the client side:

`WS = new Websocket("wss://ws-nodejs.herokuapp.com/chatroom");`

Using the client to communicate is beyond this repo (in its current state);

# Commands

At this time, unfortunately I've only gotten around to one command:

`ls` List the number of users in the chatroom.

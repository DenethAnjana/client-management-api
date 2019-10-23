const http = require('http');
const port = process.env.PORT || 3000;
const app = require('./app');
const server  = http.createServer(app);

server.listen(port);

// const express = require('express');
// const api = express();
//
// api.use(express.static(__dirname + '/public'));
//
// api.listen(3000, () => {
//   console.log('Port 3000 is used!');
// });

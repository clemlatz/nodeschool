"use strict";

const http = require('http'),
  fs = require('fs'),
  args = process.argv,
  port = args[2],
  file = args[3];

const server = http.createServer(function(req, res) {
  fs.readFile(file, function(err, data) {
    res.writeHead(200, { 'content-type': 'text/plain' });

    fs.createReadStream(file).pipe(res);
  })
});
server.listen(port);

"use strict";

const http = require('http'),
  map = require('through2-map'),
  args = process.argv,
  port = args[2];

const server = http.createServer(function(req, res) {
  req.pipe(map(function(chunck) {
    return chunck.toString().toUpperCase();
  })).pipe(res);
});
server.listen(port);

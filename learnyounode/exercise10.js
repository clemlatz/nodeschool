"use strict";

const net = require('net'),
  strftime = require('strftime'),
  args = process.argv;

const server = net.createServer(function (socket) {
  const date = strftime('%Y-%m-%d %H:%M\n', new Date());
  socket.write(date);
  socket.end();
});
server.listen(args[2]);

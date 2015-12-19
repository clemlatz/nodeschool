"use strict";

const http = require('http'),
  url = require('url'),
  args = process.argv,
  port = args[2];

const server = http.createServer(function(req, res) {
  const parsed = url.parse(req.url, true),
    path = parsed.pathname,
    iso = parsed.query.iso,
    date = new Date(iso),
    json = {};

  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (path === "/api/parsetime") {
    json.hour = date.getHours();
    json.minute = date.getMinutes();
    json.second = date.getSeconds();
  } else if (path === "/api/unixtime") {
    json.unixtime = date.getTime();
  }

  res.write(JSON.stringify(json));
  res.end();
});
server.listen(port);

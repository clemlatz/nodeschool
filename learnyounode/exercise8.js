"use strict";

const http = require("http"),
  bl = require("bl"),
  args = process.argv,
  url = args[2],
  results = new Array();

http.get(url, function(response) {
  response.pipe(bl(function(err, data) {
    if (err) throw err;
    let result = data.toString();
    console.log(result.length);
    console.log(result);
  }));
});

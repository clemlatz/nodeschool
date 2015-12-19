"use strict";

const http = require("http"),
  bl = require("bl"),
  args = process.argv,
  urls = args.slice(2),
  results = new Array();

let received = 0;

urls.forEach(function(url, index) {
  http.get(url, function(response) {
    response.pipe(bl(function(err, data) {
      if (err) throw err;
      results[index] = data.toString();
    }));
    response.on('end', function() {
      received++;
      if (received === urls.length) {
        console.log(results.join('\n'));
      }
    });
  });
});

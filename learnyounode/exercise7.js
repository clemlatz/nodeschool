"use strict";

const http = require("http"),
  args = process.argv,
  url = args[2];

http.get(url, function(response) {
  response.on("data", function(data) {
    console.log(data.toString());
  })
});

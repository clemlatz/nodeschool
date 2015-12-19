"use strict";

const filterDir = require('./exercise6-module.js'),
    args = process.argv,
    folderPath = args[2],
    ext = args[3];

filterDir(folderPath, ext, function(err, list) {
  if (err) console.log(err);
  list.forEach(function(line) {
    console.log(line);
  });
});

"use strict";

const fs = require('fs'),
  path = require('path');

module.exports = function filterDir(folderPath, ext, callback) {
  fs.readdir(folderPath, function(err, files) {
    if (err) return callback(err);
    let i = 0,
        c = files.length,
        list = new Array();
    files.forEach(function(file) {
      if (path.extname(file) == `.${ext}`) {
        list.push(file)
      }
    });
    callback(null, list);
  });
}

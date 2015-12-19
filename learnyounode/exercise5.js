"use strict";

const fs = require('fs'),
    path = require('path'),
    args = process.argv,
    folderPath = args[2],
    ext = args[3];

fs.readdir(folderPath, function(err, list) {
  if (err) throw err;
  let i = 0, c = list.length;
  for (; i < c; i++) {
    if (path.extname(list[i]) == `.${ext}`) {
      console.log(list[i]);
    }
  }
});

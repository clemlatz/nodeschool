"use strict";

const fs = require('fs');
const args = process.argv;
const filePath = args[2];

fs.readFile(filePath, 'utf-8', function(err, data) {
  if (err) {
    throw err;
  }

  const lines = data.split('\n');
  const lineCount = lines.length - 1;
  console.log(lineCount);
});

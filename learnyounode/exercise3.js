"use strict";

const fs = require('fs');

const args = process.argv;
const filePath = args[2];
const fileContent = fs.readFileSync(filePath).toString();
const lines = fileContent.split('\n');
const lineCount = lines.length - 1;

console.log(lineCount);

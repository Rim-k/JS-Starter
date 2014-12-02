// start timer
console.time('Dojo execution time');

var fs = require('fs'); // I/O : http://nodejs.org/api/fs.html
var prompt = require('prompt'); // User input : https://github.com/flatiron/prompt
var dojo = require('./dojo');

prompt.message = '';
prompt.delimiter = '';

prompt.start();

// ends timer
console.timeEnd('Dojo execution time');
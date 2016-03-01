

var fs = require('fs');
var path = process.argv[2];

//returns buffer
var readFileAtPath = fs.readFileSync(path);

console.log(readFileAtPath.toString().split('\n').length-1);

// anser:
// var fs = require('fs')
//
// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)

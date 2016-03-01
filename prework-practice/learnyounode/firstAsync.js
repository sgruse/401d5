 var fs = require('fs');

// process.argv[2];


//We are using a callback as an argurment to do something with the content of readFile once it's done.  We have to use a callback because we don't know how long it will take to read the file and the content will be undefined.  The callback takes in the inputs error and data, data becomes the content of the readfile.
fs.readFile(process.argv[2], 'utf8', callback);
function callback(err, data){
  if(!err);
  console.log(data.split('\n').length-1);
};

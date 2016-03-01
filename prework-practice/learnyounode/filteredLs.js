var fs = require('fs');
var path = require('path');
var extention = '.' + process.argv[3];

//the readdir method takes in the filepath and callback as its input.  

fs.readdir(process.argv[2], callback);

function callback(err, list){
  if(!err){
  list.forEach(function(current){
    if(path.extname(current) === extention){
      console.log(current);
    }
  })
}
};

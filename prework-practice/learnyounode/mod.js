
var fs = require('fs');
var path = require('path');

module.exports = function theModule(dirName, fileType, callback){
  var extention = '.' + fileType
  //readdir takes a dirname and a callback, we make the callback below.
  fs.readdir(dirName, function(err, list){
    if(err){
      //return breaks us out of a function because there was an error.
      return callback(err);
    } else {
      //list.filter takes an array as an input, we give it a function to run against everything in that array, if it returns true it gets put inside the filter array
      var newData = list.filter(function(current){
        return path.extname(current) === extention
      })
      //the callback in this case is the callback in the modular.js in which we pass in the new data.
      return callback(null, newData);
    }
  })
}
    // module.exports = theModule;

//process.argv = gives an array.  calls our function with an array.  

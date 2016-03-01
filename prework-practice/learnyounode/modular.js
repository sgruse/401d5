
// creating the module
var theModule = require('./mod.js');
// calling the created module w/ argurments, directory path, filetype, callback
theModule(process.argv[2], process.argv[3], myCallback);
//we are going to get back an array of filenames (readme.md), then run over each one and console.log(its name);
function myCallback(err, data){
  if (!err){
    data.forEach(function(current){
      console.log(current);
    })
  }
}

//Once the module is done doing it's methods on the process.argv[array], then it runs the callback which takes in err, or data, doing the forEach loop.

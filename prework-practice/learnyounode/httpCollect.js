var http = require('http');
var character = 0;
var myString = '';
http.get(process.argv[2], httpCallback);

function httpCallback(response){
  response.setEncoding('utf8');
  response.on('data', function(data){
    character += data.length;
    myString += data;
  })
  response.on('end', function(end){
    console.log(character);
    console.log(myString);
  })
  } 

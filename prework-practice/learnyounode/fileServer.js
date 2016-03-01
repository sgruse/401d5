var listen = process.argv[2];
var locFile = process.argv[3];

var fs = require('fs');
var http = require('http');

var server = http.createServer(function(request, response){
  fs.createReadStream(locFile).pipe(response);
});

server.listen(listen);

// var port = process.argv[2];
// var http = require('http');
// var url = require('url');
//
// var server = http.createServer(function(request, response){
//   request.pipe(map(function(chunk){
//     var ulrObj = url.parse(request.url, true)
//     var isoTime = urlObj.query.iso;
//     var thatDay = new Date(isoTime);
//     if (urlObj.pathname = '/api/parsetime'){
//       var responseObj = {};
//       responseObj.hour = thatDay.getHours();
//       responseObj.minute = thatDay.getMinutes();
//       responseObj.second = thatDay.getSeconds();
//       return JSON.stringify(responseObj);
//     } else if (urlObj.pathname = '/api/unixtime'){
//       return JSON.stringify({unixtime: thatDay.getTime()})
//     }
//   }))
// })
//
// server.listen(port);


var http = require('http');
var url = require('url');
var fs = require('fs');
var map = require('through2-map');
var port = process.argv[2];

function time(){
    var date = new Date();
    var x = new Object();
    var year = date.getFullYear();

    var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    x.hour = hours;
    x.minute = minutes;
    x.second = seconds
    return x;
}

var server = http.createServer(function(req, res){
    if(req.method == 'GET'){
        res.writeHead(200, {'Content-Type': 'application/json'})
        var x = url.parse(req.url, true).pathname;
        if(x === '/api/unixtime'){
            res.end(new Date().getTime());
        }else{
            res.end(JSON.stringify(time()));
        }
    }
})
server.listen(Number(port));

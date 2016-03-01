var net = require('net');

var server = net.createServer(function(socket){
  socket.end(formatDate());
})

function formatDate(){
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  if (month.toString().length < 2){
    month = '0' + month;
  }
  if (day.length < 2){
    day = '0' + day;
  }
  if (hours.length < 2){
    hours = '0' + hours;
  }
  if (minutes.length < 2){
    minutes = '0' + minutes;
  }
  return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n';
}

server.listen(process.argv[2]);


// answer

// var net = require('net')
//
// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }
//
// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }
//
// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })
//
// server.listen(Number(process.argv[2]))

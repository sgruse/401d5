// console.log(process.argv);

// console.log(process.argv);

console.log(process.argv.splice(2, process.argv.length-2)
  .reduce(function (acc, current){
  return acc += Number(current);
},0));



//answer
// var result = 0
//
// for (var i = 2; i < process.argv.length; i++)
//   result += Number(process.argv[i])
//
// console.log(result)

// 'use strict';
//
// module.exports = function(name){
//   var greeting = 'hello' + name + '!!!!';
//   console.log(greeting);
//   return name + ' is my bff';
// };
//
//
// exports.name = 'slug',
// exports.age = 32,
// exports.lulwat = function(){
//   console.log('lulwat');
// };
//
// console.log('lulwat this should fire first');
//
//
// //exports is a variable living on the global Object.  It has a property called module.  Module is alos an object that has a propetry of exports:.  module is looking for the exports property to see what it is equal to.
//
// //saying exports.name = 32,  is just adding a name property to the export object like regular convention.
//
// // anything returned to exports is stored inside of the greetObject.
//
// global {
//   module: {
//     exports: {
//
//     }
//   }
// }
// 


function greet(name){
  return "hello, " + name + '!!!!';
}

module.exports = greet;

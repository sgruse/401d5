// 'use strict';
//
// var greetObject = require('../day1/mod.js');
// greetObject.lulwat();
// console.log(greetObject);
//
// {
//   name: 'slug',
//   age: 32,
//   lulwat: function(){
//     lskdjfldsjfdslkfj
//   }
// }
//
// //greetObject variable = the function declared in the mod.js file.
//
// //the greetObject
//
// // var result = gre('slug');
//
// console.dir('name', greetObject);
//
//
// TESTING:

var expect = require('chai').expect;
var greet = require(__dirname + '/../day1/mod.js');

// kind of like console.log, shows what is being tested.  Describes information about test.
describe('testing greet function from greet.js', function(){
  it('greet should return "hello, slug"', function(){
    //if greet('slug') returns (hello, slug) = no error
    expect(greet('slug')).to.eql('hello, slug!!!');
  });
});

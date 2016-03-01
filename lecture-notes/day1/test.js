
var expect = require('chai').expect;
var greet = require(__dirname + '/../day1/mod.js');
var papaWheelie = require(__dirname + '/../wheel.js');
var getVehicle = papaWheelieObject.getVehicle;
// kind of like console.log, shows what is being tested.  Describes information about test.
describe('testing greet function from greet.js', function(){
  it('greet should return "hello, slug"', function(){
    //if greet('slug') returns (hello, slug) = no error
    expect(greet('slug')).to.eql('hello, slug!!!');
  });
});

describe('testing functions on papaWheelie', function(){
  it('it should return an tricycle object', function (){
    var tricycle = getVehicle();
    expect(tricycle.wheels).to.equal(3);
  })
});

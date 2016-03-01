'use strict';

var tricycle = {
  wheels: 3,
  type: 'bigwheel',
  color: 'techna'
}

exports.papaWheelie = function(num){
  console.log 'wheelie popped' + num + 'cm off the ground'
};

exports.getVehicle = function(){
  return tricycle;
};


//get vehicle is going to return tricycle.  

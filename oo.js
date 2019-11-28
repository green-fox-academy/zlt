'use strict';

var a = 123;
let b = 0.5;
const c = 'alma';

if (true) {
  var kacsa = 5;
}

function add(a, b) {
  return a + b;
}

console.log(add(0, 1));
console.log(add(0));
console.log(add());
console.log(add(0, 1, 2, 3, 4));


function Car(km) {
  this.km = km;
}

Car.prototype = {
  ride(km) {
    this.km += km;
  }
};

let car = new Car(5);
car.ride(5);
console.log(car);

class Car2 {

  constructor(km) {
    this.alma = 5;
    this.km += km;
  }

  ride = (km) => {
    this.km += km;
  }
}

console.log(Car2.prototype.ride)

const createCar = (km, engine) => {
  let name = 'volvo';

  const ride = (kms) => {
    km += kms;
  };

  const getName = () => name;

  return {
    ride,
    getName,
    alma,
    check: engine.check,
  }
};

let car = createCar(5);
car.ride(5);
console.log(Car2.alma)

[1,2,3,4,5,6,7,8]
  .filter(e => e % 2 === 0)
  .some(e => e > 6)

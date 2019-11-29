'use strict';

console.time('ez');
console.time('ez1');
console.time('ez2');
setTimeout(() => {
  console.timeEnd('ez');
  console.log('1s');
}, 1000);

console.log('for elott');
console.timeEnd('ez1');

for (let i = 0; i < 10000000000; i++) {

}

process.nextTick(() => {});

console.log('for utan');
console.timeEnd('ez2');

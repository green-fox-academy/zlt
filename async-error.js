'use strict';

const fs = require('fs');

try {
  undefined[0];
} catch (e) {
  console.error(e);
}

console.log('alma');

try {
  setTimeout(() => {
    // throw 'kecske';
  }, 10);
} catch (e) {
  console.error(e);
} finally {
  console.log('finally');
}

fs.readFile('alma.txt', (err, content) => {
  if (err) {
    console.log('nincs alma');
    return;
  }
});

const filePromise = new Promise((resolve, reject) => {
  fs.readFile('korte.txt', (err, content) => {
    if (err) {
      reject(err);
      return;
    }
    resolve(content.toString());
  });
});

fs.promises.readFile('filename.txt')
  .then(content => content.toString().split('\n')[0])
  .then(fileName => fs.promises.readFile(fileName))
  .then(c => c.toString())
  .then(c => console.log(c))
  .catch((e) => console.error(e));

fs.promises.readFile('filename.txt')
  .then(content => content.toString().split('\n')[0])
  .then(fs.promises.readFile)
  .then(c => c.toString())
  .then(console.log)
  .catch((e) => console.error(e));

const myFileReader = (filename) => {
  return fs.promises.readFile(filename)
    .then(c => c.toString());
};

Promise.all([
  myFileReader('filename.txt'),
  myFileReader('korte2.txt'),
])
  .then(console.log);

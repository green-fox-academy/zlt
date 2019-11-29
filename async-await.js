'use strict';

const fs = require('fs');


function readOneToReadOther() {
  fs.promises.readFile('filename.txt')
    .then(content => content.toString().split('\n')[0])
    .then(fileName => fs.promises.readFile(fileName))
    .then(c => c.toString())
    .then(c => console.log(c))
    .catch((e) => console.error(e));
}

readOneToReadOther();

function wait() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
  });
}

async function readOneToReadOtherAsync() {
  try {
    let content = await fs.promises.readFile('filename.txt');
    let fileName = content.toString().split('\n')[0]
    let content2 = await fs.promises.readFile(fileName)
    await wait();
    console.log(content2.toString())
  } catch (e) {
    console.error(e);
  }
}

readOneToReadOtherAsync();





'use strict';

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('nezd ma request jott');
  next();
  console.log('vege is lett');
});

app.use((req, res, next) => {
  setTimeout(() => {
    console.log('valasz');
    res.send(200);
    next()
  }, 100);
});

// app.get
app.use((req, res, next) => {
  if (req.method === "GET") {
    // amit amugy az app.get-be irnal
  }
  next();
});

// app.get(adsf,sadf,sadf)

app.listen(8080);

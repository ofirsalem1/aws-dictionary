const serverless = require('serverless-http');
const express = require('express');
const app = express();
// Routers
const { wordsRouter } = require('./routes/wordsRouter');

app.use('/', wordsRouter);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

module.exports.handler = serverless(app);

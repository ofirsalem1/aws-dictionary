const serverless = require('serverless-http');
const express = require('express');
const app = express();
// Routers
const { wordsRouter } = require('./routes/wordsRouter');
const { partOfSpeech } = require('./routes/partOfSpeech');
app.use('/part-of-speech', partOfSpeech);
app.use('/', wordsRouter);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

module.exports.handler = serverless(app);

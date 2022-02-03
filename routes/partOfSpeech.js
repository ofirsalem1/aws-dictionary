const express = require('express');
const router = express.Router();
//FUNCTIONS
const { randomByPos } = require('../controllers/partOfSpeechController');

router.get('/:part', randomByPos);

module.exports.partOfSpeech = router;

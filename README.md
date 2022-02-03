# API to My dictionary

## URL: https://ty8omrsmwa.execute-api.eu-west-1.amazonaws.com/dev/

## In this API you can get result of four situation:

## 1. GET /:word - will return all the word definition & part of speech

![](./screenSohtsReadme/search-word.png)

## 2. GET /:word/:partOfSpeech - will return a word + definition + part of speech (noun, verb, adjectives, etc...)

![](./screenSohtsReadme/search-word-with-pos.png)

## 3. GET /part-of-speech/:part - will return a random word + definition + part of speech

![](./screenSohtsReadme/search-random-word-pos.png)

## 4. GET /part-of-speech/:part?letter=X - will return a random word which start with the same letter + definition + part of speech

![](./screenSohtsReadme/search-random-word-pos-letter.png)

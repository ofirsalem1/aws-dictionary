const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const { TABLE_NAME, PART_OF_SPEECH_DICT } = require('../utils/constants');

exports.randomByPos = async (req, res, next) => {
  const { part } = req.params;
  const { letter } = req.query;
  let params;
  console.log('not letter');
  params = {
    TableName: TABLE_NAME,
    FilterExpression: '#pos = :pos and begins_with(#word, :word)',
    ExpressionAttributeNames: {
      '#pos': 'pos',
      '#word': 'word',
    },
    ExpressionAttributeValues: {
      ':pos': PART_OF_SPEECH_DICT[part],
      ':word': letter ? letter.toUpperCase() : '',
    },
  };
  try {
    console.log(params);
    const result = await dynamodb.scan(params).promise();
    const randomNum = Math.floor(Math.random() * result.Items.length);
    return res.status(200).json(result.Items[randomNum]);
  } catch (error) {
    console.log(error);
    return res.status(400).json('Could not find the pos, try again');
  }
};

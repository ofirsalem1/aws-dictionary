const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const { TABLE_NAME, PART_OF_SPEECH_DICT } = require('../utils/constants');

exports.randomByPos = async (req, res, next) => {
  const { part } = req.params;
  //   const params = {
  //     TableName: TABLE_NAME,
  //     KeyConditionExpression: `pos = :pos`,
  //     ExpressionAttributeValues: {
  //       ':pos': PART_OF_SPEECH_DICT[part],
  //     },
  //   };

  var params = {
    TableName: TABLE_NAME,
    FilterExpression: '#pos = :pos', // optional
    ExpressionAttributeValues: { ':pos': PART_OF_SPEECH_DICT[part] },
    ExpressionAttributeNames: { '#pos': 'pos' }, // optional
  };

  try {
    const result = await dynamodb.scan(params).promise();
    console.log(result.Items.length);
    const randomNum = Math.floor(Math.random() * result.Items.length);
    return res.status(200).json(result.Items[randomNum]);
  } catch (error) {
    console.log(error);
    return res.status(400).json('Could not find the pos, try again');
  }
};

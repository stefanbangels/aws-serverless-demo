const AWS = require('aws-sdk')
const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

exports.handler = async (event) => {
  const id = event.pathParameters.id
  const { Body } = await s3.getObject({
    Bucket: 'aws-serverless-demo',
    Key: `incoming/data-${id}.json`
  }).promise()
  return {
    statusCode: 200,
    body: Body.toString()
  }
}

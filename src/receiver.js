const AWS = require('aws-sdk')
const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

exports.handler = async (event) => {
  const id = new Date().getTime()
  await s3.upload({
    Bucket: 'aws-serverless-demo',
    Key: `incoming/data-${id}.json`,
    Body: event.body
  }).promise()
  return {
    statusCode: 201,
    headers: {
      Location: `https://api.assertdevelopments.com/aws-serverless-demo/data/${id}`
    }
  }
}

const AWS = require('aws-sdk')
const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

exports.handler = async (event) => {
  console.log(JSON.stringify(event))

  const id = event.pathParameters.id

  // download
  const { ContentType, Body } = await s3.getObject({
    Bucket: process.env.S3_BUCKET,
    Key: `${process.env.S3_PREFIX}/data-${id}.json`
  }).promise()

  return {
    statusCode: 200,
    headers: {
      'Content-Type': ContentType
    },
    body: Body.toString()
  }
}

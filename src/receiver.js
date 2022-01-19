const AWS = require('aws-sdk')
const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

exports.handler = async (event) => {
  console.log(JSON.stringify(event))

  const id = new Date().getTime()

  // upload
  await s3.upload({
    Bucket: process.env.S3_BUCKET,
    Key: `${process.env.S3_PREFIX}/data-${id}.json`,
    Body: event.body
  }).promise()

  return {
    statusCode: 201,
    headers: {
      Location: `https://api.assertdevelopments.com/aws-serverless-demo/data/${id}`
    },
    body: JSON.stringify({
      message: `payload accepted, generated id ${id}`
    })
  }
}

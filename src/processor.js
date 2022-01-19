exports.handler = async (event) => {
  console.log(JSON.stringify(event))

  event.Records.forEach(record => {
    const bucket = record.s3.bucket.name
    const key = record.s3.object.key
    console.log(`do something with ${bucket}:${key}...`)
  })
}

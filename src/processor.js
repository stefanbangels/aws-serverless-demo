exports.handler = async (event) => {
  event.records.forEach(record => {
    const bucket = record.s3.bucket.name
    const key = record.s3.object.key
    console.log(`do something with ${bucket}:${key}...`)
  })
}

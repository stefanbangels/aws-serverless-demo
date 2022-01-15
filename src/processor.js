exports.handler = async (event) => {
  console.log(`process: ${JSON.stringify(event)}`)
  const results = []
  event.Records.forEach(record => {
    const bucket = record.s3.bucket.name
    const key = record.s3.object.key
    console.log(`do something with ${bucket}:${key}...`)
    results.push({ bucket, key })
  })
  return { results }
}

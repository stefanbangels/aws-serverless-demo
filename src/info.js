exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      application: 'AWS Serverless Demo',
      description: 'Demo material for the AWS Serverless presentation',
      version: '1.0'
    })
  }
}

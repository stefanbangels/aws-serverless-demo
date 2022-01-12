const { handler } = require('../src/api')

test('info api returns information', async () => {
  const event = {
    resource: '/info',
    httpMethod: 'GET'
  }
  const response = await handler(event, {})
  expect(response.statusCode).toBe(200)
  expect(response.body).toEqual(JSON.stringify({
    application: 'AWS Serverless Demo',
    description: 'Demo material for the AWS Serverless presentation'
  }))
})

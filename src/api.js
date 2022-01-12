const RestHandler = require('./util/rest-handler').RestHandler

const restHandler = new RestHandler()
  .get('/info', getInfo)

async function getInfo (event, response) {
  return response
    .status(200)
    .json({
      application: 'AWS Serverless Demo',
      description: 'Demo material for the AWS Serverless presentation'
    })
}

module.exports = {
  handler: restHandler.handler
}

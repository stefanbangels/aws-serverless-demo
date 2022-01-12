const { Response } = require('./response')

const GET = 'GET'
const PUT = 'PUT'
const POST = 'POST'
const DELETE = 'DELETE'

class RestHandler {
  constructor () {
    this.routes = []
  }

  get (resource, handlerFn) {
    return this.addRoute(GET, resource, handlerFn)
  }

  post (resource, handlerFn) {
    return this.addRoute(POST, resource, handlerFn)
  }

  put (resource, handlerFn) {
    return this.addRoute(PUT, resource, handlerFn)
  }

  delete (resource, handlerFn) {
    return this.addRoute(DELETE, resource, handlerFn)
  }

  addRoute (httpMethod, resource, handlerFn) {
    this.routes.push({
      resource: httpMethod + resource,
      handlerFn
    })
    return this
  }

  get handler () {
    return async (event, context) => {
      const route = this.routes.find((route) => {
        return route.resource === (event.httpMethod + event.resource)
      })
      let response
      if (route) {
        response = await route.handlerFn(event, new Response(), context)
      } else {
        response = new Response()
          .status(404)
          .json({ message: `no handler found for ${event.httpMethod} ${event.resource}` })
      }
      return response.proxyResponse
    }
  }
}

module.exports = {
  RestHandler
}

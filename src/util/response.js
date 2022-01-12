const CONTENT_TYPE_JSON = 'application/json'

class Response {
  constructor () {
    this.proxyResponse = {
      statusCode: 200,
      headers: {},
      body: ''
    }
  }

  /**
   * Set the status code
   * @param {number} statusCode
   * @returns {Response} this
   */
  status (statusCode) {
    this.proxyResponse.statusCode = statusCode
    return this
  }

  /**
   * Respond with a JSON string and set the 'Content-Type' header
   * @param {*} obj
   * @returns {Response} this
   */
  json (obj) {
    this.proxyResponse.body = JSON.stringify(obj)
    this.header('Content-Type', CONTENT_TYPE_JSON)
    return this
  }

  /**
   * Respond with a string message
   * @param {string} msg
   * @returns {Response} this
   */
  message (msg) {
    this.proxyResponse.body = msg
    return this
  }

  /**
   * Set headers
   * @param {Object} obj the headers as key/value pairs
   * @returns {Response} this
   */
  headers (obj) {
    this.proxyResponse.headers = obj
    return this
  }

  /**
   * Set a single header
   * @param {string} name header name
   * @param {string} value header value
   * @returns {Response} this
   */
  header (name, value) {
    this.proxyResponse.headers[name] = value
    return this
  }
}

module.exports = {
  Response
}

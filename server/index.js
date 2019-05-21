const http = require('http')
const tickets = require('./tickets.json')

const port = 8080

const requestHandler = (request, response) => {
  if (request.method === 'GET' && request.url === '/tickets') {
    response.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-Powered-By': 'nodejs',
    })
    response.write(JSON.stringify(tickets))
    response.end()
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.end('<h1>404 Not Found<h1>')
  }
}
const server = http.createServer(requestHandler)
server.listen(port, err => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})

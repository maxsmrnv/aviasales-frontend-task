const http = require('http');
const fs = require('fs');

const port = 8080;
const requestHandler = (request, response) => {
  if (request.method === 'GET' && request.url === '/tickets') {
    response.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'X-Powered-By': 'nodejs'
    });
    fs.readFile('tickets.json', (err, data) => {
      if (err) throw err;

      const tickets = JSON.parse(data);
      response.write(JSON.stringify(tickets));
      response.end();
    });
  } else {
    response.writeHead(404);
    response.end();
  }
};
const server = http.createServer(requestHandler);
server.listen(port, err => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});

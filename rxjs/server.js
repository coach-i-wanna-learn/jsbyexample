const http = require('http');

const server = http.createServer((req, res) => {
 if (req.method === 'GET' && req.url === '/hello') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found\n');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

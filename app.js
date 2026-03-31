const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from JS for Pipeline!\nVersion: 1.0.0');
});

server.listen(3000, () => {
  console.log('JS app running on port 3000');
});

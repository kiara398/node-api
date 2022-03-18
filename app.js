const http = require('http');

const hostname = 'localhost';
const port = 5000;

const server = require('./routes.js'); // imports the routing file

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

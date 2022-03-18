const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {

  var employeeOps = require('./controller.js'); // importing the main logic
  const reqUrl =  url.parse(req.url, true);

  // GET endpoint
  if(reqUrl.pathname == '/employees' && req.method === 'GET') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    employeeOps.getEmployees(req, res);
  }

  // POST endpoint
  else if(reqUrl.pathname == '/employees' && req.method === 'POST') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    employeeOps.createEmployee(req, res);
  }

  // invalid URL
  else {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    employeeOps.invalidUrl(req, res);
  }
})
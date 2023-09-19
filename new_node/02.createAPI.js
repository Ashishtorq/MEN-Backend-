const http = require('http');
const data = require('./02.data.API');
http
  .createServer((resp, req) => {
    resp.writeHead(200, { 'content-Type': 'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
  })
  .listen(4500);

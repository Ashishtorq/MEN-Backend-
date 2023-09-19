const http = require("http");

http
  .createServer((req, resp) => {
    resp.write("<h1>This is live</h1>");
    resp.end();
  })
  .listen(3001);

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<html><h1>Welcome Home</h1></html>");
    return res.end();
  } else if (req.url === "/about") {
    res.write("<html><h1>About Us</h1></html>");
    return res.end();
  } else if (req.url === "/node") {
    res.write("<html><h1>Welcome to my Node Js project</h1></html>");
  }
});

server.listen(8000);

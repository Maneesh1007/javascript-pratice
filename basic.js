const http = require("http");

const server = http.createServer((req, res) => console.log("Maneesh"));

server.listen(8000);

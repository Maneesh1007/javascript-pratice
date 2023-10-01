const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;

  if (url === "/") {
    fs.readFile("message.txt", { encoding: "utf8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      res.write("<html>");
      res.write(`<body>${data}</body>`);
      res.write("<form action='/message' method='POST'>");
      res.write("<input type='text' name='message'>");
      res.write("<button type='submit'>Submit</button>");
      res.write("</form>");
      res.write("</html>");
      return res.end();
    });
  }

  if (url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => body.push(chunk));
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
};

module.exports = requestHandler;

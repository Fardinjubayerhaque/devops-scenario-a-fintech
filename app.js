const http = require("node:http");

function message(path) {
  return path === "/health" ? "Healthy" : "Fintech DevOps Demo";
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(message(req.url));
});

if (require.main === module) {
  server.listen(3000, () => console.log("Running on port 3000"));
}

module.exports = message;

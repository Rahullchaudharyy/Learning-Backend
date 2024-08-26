import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    fs.readFile("./Serving-Page/public/home.html", (error, data) => {
      if (error) {
        throw error;
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/about") {
    res.writeHead(200, "OK", { "Content-Type": "text/html" });
    fs.readFile("./Serving-Page/public/about.html", (error, data) => {
      if (error) {
        throw error;
      } else {
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, "BAD", { "Content-Type": "text/html" }); 
    res.end("<h2>Opps !! 404 page not found</h2>");
  }
});

server.listen(3000, () => {
  console.log("Server Started!!! On port:3000");
});

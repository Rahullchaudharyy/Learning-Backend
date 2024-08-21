import http from "http"
// Creating the servers ..

const Server = http.createServer((req, res) => {
    // console.log(req)
    // res.statusCode= 404;
    // res.statusMessage="Bad Request made "

    // res.writeHead(202,"Good",)
    res.setHeader("Content-Type","text/html")
    res.write("<h1>Hello form Node.js</h1>")

})

Server.listen(3000, () => console.log("Hey it's my first time to create a server ."))
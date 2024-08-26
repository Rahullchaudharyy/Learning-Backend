import http from 'http';


const Server = http.createServer((req, res) => {
    //    console.log(req.url)


    if (req.url == '/') {
        res.end("<h1>Home PAGE</h1>")
    } else if (req.url == '/about') {
        res.write("<h1>Hey I am rahul and now i am creating one server with the help of node.js</h1>")
    } else{
        res.end("<h1>Opps!! 404 Page not found </h1>")

    }
})

Server.listen(4000, () => {
    console.log("Server Started !!")
})

import http from "http";

const Server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
   
        
           res.write(
               "<h1>I am also using the nodemon whhy please cheak the code , Wait do you have the accesss ASAP arrrest him </h1>"
           );
     
    
});

Server.listen(3000, () =>
    console.log("Server listening on port 3000"),
console.log("are you serious ??")
);

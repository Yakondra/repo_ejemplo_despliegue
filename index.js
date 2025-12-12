const http = require("http");

const port = 3000;

http.createServer((req, res) => {
    res.end("servidor Node dentro de docker");
}).listen(port, ()=> console.log("Hola mundo"));


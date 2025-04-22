let http = require("http");

http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("Server is Onair")
    }else{
        res.end("Not Found")
    }
}).listen(8080, ()=> {
    console.log("Live Server Activated");
})
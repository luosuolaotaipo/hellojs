var fs = require('fs');
fs.readFile('./resource.json',(err,data)=>{
    console.log(data)
});

var http = require('http');
http.createServer((req,res)=>{
    console.log(req.url);
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('Hi,there');
    console.log(111);
}).listen(3000,()=>{console.log('server is listen on 3000')});
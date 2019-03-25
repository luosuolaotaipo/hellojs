const http = require('http');
const fs = require('fs');

var server =  http.createServer((req,res)=>{
    let target = `.${req.url}`
    console.log(req.url);
    fs.readFile(target,(err,data)=>{
        if(err){
            res.write('404'+err.message);
        }else{
            res.write(data);
        }
        res.end();
    });
});

server.listen(3000,(console.log('readFileServer is running on 3000')));
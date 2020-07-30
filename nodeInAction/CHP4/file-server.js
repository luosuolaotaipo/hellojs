const fs = require('fs');
const http = require('http');
const path = require('path');
const parse = require('url').parse;
const fileRoot = __dirname+'/file-server-folder';

const server = http.createServer((req,res)=>{
    const filePath = path.join(fileRoot,req.url);
    const readStream = fs.createReadStream(filePath);
    readStream.on('data',(chunk)=>{
        res.write(chunk);
    });
    readStream.on('end',()=>{
        res.end();
    })
});
server.listen(3000,()=>{
    console.log('file server is listening on port 3000');
})
const http = require('http');
const parser = require('url').parse;
const joiner = require('path').join;
const fs = require('fs');

const rootPath = __dirname;

const server = http.createServer((req,res)=>{
    const url = parser(req.url);
    const path = joiner(rootPath,url.pathname);
    const stream = fs.createReadStream(path);
    stream.on('data',(chunk)=>{
        res.write(chunk);
    });
    stream.on('end',()=>{
        res.end();
    })
})
server.listen(3000,()=>{console.log('read stream server is listening on 3000')});
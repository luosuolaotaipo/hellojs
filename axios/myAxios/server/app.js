const express = require('express');
const server = express();
server.all('*',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    next();
})
server.get('/data',(req,res)=>{
    res.send({'a':'1','b':2})
})

server.listen(3000,()=>console.log('server is listening on port 3000'))
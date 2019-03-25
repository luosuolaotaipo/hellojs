const express = require('express');
const expressStatic = require('express-static');
var server = express();// set up a service
// server.use('/',(req,res)=>{
//     console.log(req.url);

//     res.end();
// })
server.get('/a',(req,res)=>{
    res.write('haha');
    res.end();
})


server.listen(3000);
server.use(expressStatic(''));
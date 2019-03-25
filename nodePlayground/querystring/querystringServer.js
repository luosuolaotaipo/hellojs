const queryString = require('querystring');
const urlLib = require('url');
const http = require('http');
var server = http.createServer((req,res)=>{
    if(req.url.indexOf('?') != -1){
        console.log(req.url);
        let info = queryString.parse(req.url.split('?')[1]);
        // let info = urlLib.parse(req.url,false).query;
        console.log(info);
        res.write('200');
        
    }else{
        res.write('invalid');
    }
    res.end();

}).listen(3000,()=>{console.log('querystring is listening on port 3000')});
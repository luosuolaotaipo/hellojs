const http = require('http');
const querystring = require('querystring');

var server = http.createServer((req,res)=>{
    var receive = "";
    var i = 0;
    console.log(req.url)
    req.on('data',(data)=>{
        receive += data;
        console.log(`${i++}`)
    });
    req.on('end',()=>{
        const postInfo = querystring.parse(receive);
        // res.write()
        // console.log(postInfo);
        console.log('end');
        res.end();
    });

}).listen(3000,()=>{console.log('post is running on port 3000')});
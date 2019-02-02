var http = require('http');
var fs = require('fs');
var path = require('fs');
var mime = require('mime');//mime 类型<=>文件拓展名

var chatServer = require('./lib/chat-server')

var cache = {};

function send404(response){
    response.writeHead(404,{'Content-Type':'text/plain'});
    response.write('Error 404: resource not found');
    response.end();
}

function sendFile(response,filePath,fileContent){
    response.writeHead(200,{'Content-type':mime.loopup(path.basename(filePath))});
    response.end(fileContent);
}

function serveStatic(response,cache,absPath){
    if(cache[absPath]){
        sendFile(response,absPath,cache[absPath]);
    }else{
        fs.exists(absPath,(isExist)=>{
            if(isExist){
                fs.readFile(absPath,(err,data)=>{
                    if(err){
                        send404(response);//!!
                    }else{
                        cache[absPath]=data;
                        sendFile(response,absPath,data);//?这里的response是啥
                    }
                });
            }else{
                send404(response);
            }
        })
    }
}

var server = http.createServer((req,res)=>{
    var filePath=false;//?
    if(req.url ==='/'){
        filePath='public/index.html';
    }else{
        filePath = 'public'+req.url;
    }
    var abspath = './'+filePath;
    serveStatic(res,cache,abspath);
})

server.listen(3000,()=>{
    console.log('Server is listening on port 3000');
})

chatServer.listen(server);
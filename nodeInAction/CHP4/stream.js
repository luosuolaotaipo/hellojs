// ReadableStream -> WritableStream

const fs = require('fs');
const readStream =  fs.createReadStream('./stream-test.txt');
const writeStream = fs.createWriteStream('./steam-write.txt');
readStream.pipe(writeStream);
 
// req is a ReadableStream Object
const http = require('http');
const httpWrite = fs.createWriteStream('./stream-http-write.json')
const server = http.createServer((req,res)=>{
    req.pipe(httpWrite); // failed
    res.end();
})
server.listen(3000,()=>{
    console.log('server is listening on port 3000')
});
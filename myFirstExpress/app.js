var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/process_get', function (req, res) {
 
    // 输出 JSON 格式
    var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })


var server = app.listen(4210, function () {
    console.log('Listening on port %d', server.address().port);
});

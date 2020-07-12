const http = require('http');
const url = require('url');
const items = [];
const server = http.createServer((req, res) => {
    switch (req.method) {
        case 'POST': {
            let item = '';
            req.setEncoding('utf-8');
            req.on('data', (chunk) => {
                item += chunk;
            });
            req.on('end', () => {
                items.push(item)
                res.end('OK\n');
            });
            break;
        }
        case 'GET': {
            const body = items.reduce((acc, cur, curI) => {
                return acc + curI + ':' + cur + '\n'
            }, '');
            res.setHeader('Content-Length', Buffer.byteLength(body));
            res.setHeader('Content-Type', 'text/plain;charset="utf-8"');
            res.end(body);
            break;
        }
        case 'DELETE': {
            // DELETE /<itemId>?api-key=foobar
            const pathName = url.parse(req.url).pathname;
            const id = pathName.replace(/[^0-9]/ig, '');
            if (isNaN(id)) {
                res.statusCode = 400;
                res.end('invalid item id');
            } else if (!items[id]) {
                res.statusCode = 404;
                res.end('Item not found');
            } else {
                items.splice(id, 1);
                res.end('deleted\n');
            }
        }
        case 'PUT': {
            const pathName = url.parse(req.url).pathname;
            const id = pathName.replace(/[^0-9]/ig, '');
            if (isNaN(id)) {
                res.statusCode = 400;
                res.end('invalid item id');
            } else if (!items[id]) {
                res.statusCode = 404;
                res.end('Item not found');
            } else {
                let newItem = '';
                req.setEncoding('utf-8');
                req.on('data', (chunk) => {
                    newItem += chunk;
                });
                req.on('end', () => {
                    items[id] = newItem;
                    res.end('OK\n');
                });
            }
            break;
        }
        default: break;
    }

})
server.listen(3000);
const http = require('http');
const fs = require('fs');


const server = http.createServer(function(req, res) {

    const myReadStream = fs.createReadStream(`${__dirname}/index.html`, 'utf-8');

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');

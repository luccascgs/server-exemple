const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    let result = parseInt(queryObject.a) + parseInt(queryObject.b);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Result: ${result}`);
});

server.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}! 🚀`);
});
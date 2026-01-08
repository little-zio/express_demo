// node 的 http 模块
const http = require('http');

const server = http.createServer( function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('hello world');
})

server.listen(3000, function(){
    console.log('服务已启动。。。');
})


// node 的 http 模块
// const http = require('http');

// const server = http.createServer( function(req, res) {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('hello world');
// })

// server.listen(3000, function(){
//     console.log('服务已启动。。。');
// })


// express 框架
const express = require('express');

const app = express();

// get请求 路径位'/'
app.get('/', function(req, res) {
    res.send('hello express 111');
})

app.get('/user', function(req, res) {
    console.log(req.query);
    res.send('user')
})

app.listen(3000, function() {
    console.log('express服务已启动。。。');
})







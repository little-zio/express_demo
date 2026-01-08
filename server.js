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

app.all('/about', function(req, res) {
    res.send({
        name: 'about page',
        age: 18
    })
})

// 字符模式
// app.get('/a{b}cd', function(req, res) { //b可以出现也可以不出现
//     res.send('a{b}cd 匹配成功');
// })

// app.get('/ab*cd', function(req, res) { //*通配符任意东西
//     res.send('ab*cd 匹配成功');
// })



// 正则模式
app.get(/a/, function(req, res) {
    res.send('/a/ 正则匹配成功');
})

app.get(/.*fly$/, function(req, res) { //以fly结尾的路径都可以
    res.send('/.*fly$/ 正则匹配成功');
})




app.listen(3000, function() {
    console.log('express服务已启动。。。');
})







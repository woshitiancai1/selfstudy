//1.引入http模块
var http = require('http');
//2.使用http.createServer()方法创建一个web服务器,得到服务器实例
var server = http.createServer()
//3.当客户端请求过来，会自动触发web服务器的request请求，
//然后执行第二个参数：回调函数
server.on('request',function(){
    console.log("收到客户端的请求!");
})
//4.绑定端口号，启动服务器
server.listen(3000,function(){
    console.log("服务器启动成功！");
});
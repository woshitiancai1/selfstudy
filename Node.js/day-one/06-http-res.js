var http = require('http');
var server = http.createServer()
//当客户端请求过来，会自动触发web服务器的request请求，
//然后执行第二个参数：回调函数(req,res)分别为请求对象和响应对象
//req：请求对象：用来获取客户端的一些请求信息 例如请求路径
//res：响应对象：用来给客户端发送响应消息
server.on('request',function(req,res){
    console.log("收到客户端的请求!");
    console.log('请求路径是:'+req.url);//得到请求路径
    //res有一个write方法 可以给客户端发送响应数据
    //write可以使用多次，但是要用end来结束响应
    res.write("hello");
    res.end();
})
server.listen(3000,function(){
    console.log("服务器启动成功！");
});
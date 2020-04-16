var http = require("http");
//1.创建server
var server = http.createServer();
//2.绑定request事件
server.on('request',function(req,res){
    //req.url获取到的是 端口号之后的那部分路径，所有请求路径均是以/开头
    var url = req.url;
    //req.remotePort可以得到请求我的服务的客户端的端口号
    //根据不同的请求路径响应不同的结果
    if(url == '/'){
        res.end('index page')
    }
    else if(url == '/login'){
        res.end('login page')
    }
    else if(url == '/products'){
        //products为一个数组
        var products = [
            {
                name:'apple-x',
                price:888
            },
            {
                name:'boluo',
                price:1000,
            },
            {
                name:'big-boluo',
                price:2000
            }
        ]
        //响应内容只能是二进制数据或字符串
        //数字、对象、数组、布尔值都不可以响应

        //JSON.stringify()方法将响应内容转换为字符串
        //在这里就是讲products转化为了字符串数组
        res.end(JSON.stringify(products));
    }
    else{
        res.end('404 not found')
    }
})
server.listen(3000,function(){
    console.log('服务器启动成功!');
})
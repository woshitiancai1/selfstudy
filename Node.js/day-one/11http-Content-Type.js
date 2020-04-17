var http = require('http');
var server = http.createServer();
server.on('request',function(req,res){
    //响应数据中文出现乱码的情况：
    //在服务端发送的数据，其实是utf8编码的内容
    //但是浏览器不知道你是utf8编码的内容
    //浏览器不知道服务器响应内容的编码的情况下，会按照操作系统的默认编码去解析
    //中文操作系统默认是gbk   
    //解决办法：
    //Content-Type用来告知对方发送的数据的数据内容是什么格式
    // res.setHeader('Content-Type','text/plain;charset=utf-8');
    // res.end("hello 薛明星")

    var url = req.url;
    if(url == '/plain'){
        //这里的plain表示：响应的数据内容是普通文本
        res.setHeader('Content-Type','text/plain;charset=utf-8');
        res.end("hello 薛明星")
    }
    else if(url == '/html'){
        //这里的html指的是：数据的内容格式为html标签
        //如果响应的是html格式的字符串，则也要告诉浏览器text/html的格式文本
        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.end('<p>hello html 薛明星</p>')
    }
})
server.listen(3000,function(){
    console.log("server is running");
})
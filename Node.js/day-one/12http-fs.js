var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.on('request',function(req,res){
    var url = req.url;
    //请求html页面
    if(url == '/'){
        fs.readFile('./resource/index.html',function(error,data){
            if(error){
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.end('文件读取失败，请稍后重试');
            }
            else{
                res.setHeader('Content-Type','text/html;charset=utf-8');
                res.end(data);
            }
        })
    }
    //请求图片
    else if(url == '/image'){
        fs.readFile('./resource/1.jpeg',function(error,data){
            if(error){
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.end('图片读取失败，请稍后重试');
            }
            else{
                //图片不需要指定编码
                //常说的编码一般指的是字符编码
                res.setHeader('Content-Type','image/jpeg');
                res.end(data);
            }
        })
    }
})
server.listen(3000,function(){
    console.log("server is running");
})
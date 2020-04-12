//JSONP请求的服务器端

//写一个web服务器
const http = require('http');
const server = http.createServer();
const urlModule = require('url');
server.on('request',(req,res)=>{
    const person = {
        name:'zhangan',
        age:20
    }
    //经过使用url模块的解析转换，并使用对象的解构赋值，把需要的pathname和query属性解构出来
    const {pathname:url,query} = urlModule.parse(req.url,true);
    if(url == '/api/getjsonp'){
         const str = `${query.callback}(${JSON.stringify(person)})`;
         res.end(str);   
    }
    else{
        res.end('404')
    }
})
server.listen(3000);
console.log('服务器启动了!');
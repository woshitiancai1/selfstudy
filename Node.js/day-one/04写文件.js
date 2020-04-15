var fs = require('fs');
//第一个参数：要写入的文件路径，第二个参数：要写入的文件内容
//第三个参数是回调函数，只接收一个参数error
//fs.writeFile方法会覆盖原有文件的内容
fs.writeFile('./hello.txt','你好呀',function(error){
    if(error){
        console.log("文件写入失败!");
    }
    else{
        console.log("文件写入成功!");
    }
})
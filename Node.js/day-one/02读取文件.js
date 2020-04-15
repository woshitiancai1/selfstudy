//浏览器中的JS是没有文件操作的能力的
//Node中的JS具有文件操作的能力
//fs是file-system的简写，就是文件系统的意思
//fs核心模块提供了所有的文件操作的相关的API

//1.使用require方法加载fs核心模块
var fs = require('fs');

//2.读取文件
//第一个参数为读取的文件的路径，第二个参数是回调函数：参数为data和error
//分别代表成功和读取失败,且两个参数的位置不能改变
fs.readFile('./hello.txt',function(error,data){
    if(error){
        console.log("读取文件失败!");
    }
    else{
        //文件中存储的都是二进制数据，而这里的data是二进制数据转化十六进制之后的数据
        console.log(data.toString());//这里的toString()方法将十六进制转化为我们认识的数据
    }
})
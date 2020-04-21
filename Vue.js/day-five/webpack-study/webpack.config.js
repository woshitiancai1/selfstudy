//默认情况下，直接使用webpack .\src\main.js -o  .\dist\bundle.js就能构建
//如果只运行webpack命令的话，需要在项目的根目录中，而且，在这个配置文件中，
//必须要显示要处理文件的路径和输出的文件的路径

//注意：这里使用Node中的语法向外暴露一个配置对象
//因为webpack这个构建工具，底层就是使用Node开发出来的

const path = require('path')
module.exports = {
    entry:path.join(__dirname,'./src/main.js'),//指定要处理的JS文件路径
    output:{
        path:path.join(__dirname,'./dist/'),//指定要输出文件的路径
        filename:'bundle.js',//指定要输出的文件的名称
    }
}
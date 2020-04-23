//使用Node语法，向外暴露配置对象，从而，让webpack运行的时候，加载指定的配置
const path = require('path');

//1.导入在内存中生成页面的webpack插件
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    //配置npm run dev
    entry:path.join(__dirname,'./src/main.js'),//项目的入口文件
    output:{//打包好的文件的输出配置
        path:path.join(__dirname,'/dist'),//输出文件路径
        filename:'bundle.js'//输出文件名
    },
    //配置html-webpack插件
    plugins:[
        new htmlWebpackPlugin({//创建一个htmlWebpackPlugin的实例对象
            template:path.join(__dirname,'./src/index.html'),//指定模板页面的路径
            filename:'index.html'//指定内存中生成的html名称
        })
    ]
}
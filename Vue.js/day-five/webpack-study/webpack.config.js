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
    ],
    module:{//用来配置非JS文件对应的loader
        rules:[//就是这些非JS文件和loader之间的对应关系
            //创建处理css文件的laoder匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},
            //配置处理less文件的规则
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            //配置处理scss文件的规则
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            //配置处理样式表中图片的规则
            //loader规则，可以使用?给url-loader传递参数：
            //其中，有个固定参数limit表示图片的大小 ，需要给定一个数组
            //limit给定的这个数值是图片的大小，单位是Byte(字节)
            //如果指定了limit参数，则只有图片的大小 小于给定的值，才会转为base64格式
            //否则不转化
            {test:/\.jpg|png|gif|bmp$/,use:['url-loader?limit=110378&name=[hash:6][name].[ext]']},
            //添加转化JS文件的loader，必须将node_modules目录设置为排除项
            //否则项目运行不起来
            // {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
        ]
    }
}
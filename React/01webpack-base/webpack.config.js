const path = require("path");
//导入在内存中生成Index页面的插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
//创建一个插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'), //源文件,
    filename: 'index.html' //生成的内存中首页的名称
})

//向外暴露一个打包的配置对象
//webpack默认只能识别.js后缀名的文件，无法识别其它后缀名的文件，所以要配置第三方的laoder
//因为webpack是基于Node构建的，所以webpack支持所有的Node API和语法
module.exports = {
    mode: 'development', //开发环境main.js不会被压缩
    //在webpack 4.x中，约定大于配置。约定：默认的打包入口路径是：src目录下的index.js
    //目的是尽量减少配置文件的体积
    //打包的输出文件未dist目录下面的main.js

    plugins: [
        htmlPlugin
    ],
    //module是所有第三方模块的配置规则
    module: {
        rules: [ //用来写第三方的匹配规则
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },

        ]
    }
}

//export default{}为ES6中导出模块的API，不是Node的API，
//与之对应的是import ** from '文件路径'
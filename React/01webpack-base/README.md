1.npm init -y：初始化项目  
2.新建src和dist文件夹，src里存放项目的源代码，dist里存放发布时的代码  
3.在src里创建index.html，main.js（webpack打包的入口文件），  
4.安装webpack，cnpm i webpack webpack-cli -D(项目安装)，  
cnpm i webpack webpack-cli -g(全局安装)  
5.根目录下新建webpack.config.js配置文件，并进行配置  
6.项目安装webpack-dev-server：cnpm i webpack-dev-server -D，  
7.在package.json中，进行配置  
"scripts": {  
        "test": "echo \"Error: no test specified\" && exit 1",  
        "dev": "webpack-dev-server --opan --port 3000 --hot --host   
        --host 127.0.0.1"  
    },  
8.npm run dev   来启动项目  
9.安装html-webpack-plugin：cnpm i html-webpack-plugin -D,  
用来帮我们把页面生成到内存中去  
10.配置webpack.config.js文件：  
const path = require("path");  
//导入在内存中生成Index页面的插件  
const HtmlWebpackPlugin = require("html-webpack-plugin");  
//创建一个插件的实例对象  
const htmlPlugin = new HtmlWebpackPlugin({  
    template: path.join(__dirname, './src/index.html'), //源文件,  
    filename: 'index.html' //生成的内存中首页的名称  
})  
module.exports = {  
    plugins: [  
        htmlPlugin  
    ]  
}  
11.cnpm i react react-dom -S  
12.安装babel插件：  
cnpm i @babel/core @babel/loader @babel/plugin-transform-runtime -D  
cnpm i @babel/preset-env @babel/preset-stage-0 -D  
cnpm i @babel/plugin-proposal-object-rest-spread -D  
cnpm i @babel/preset-react -D  
cnpm i @babel/runtime -S  
13.在webpack.config.js文件中进行配置：  
module.exports = {  
    //module是所有第三方模块的配置规则  
    module: {  
        rules: [ //用来写第三方的匹配规则  
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },  
        ]  
    }  
}  
14.根目录下创建.babelrc文件并进行配置：  
{  
    "presets": ["@babel/preset-env","@babel/stage-0","@babel/preset-react","mobx"],  
    "plugins": ["@babel/plugin-transform-runtime","@babel/plugin-proposal-object-rest-spread"]  
}  

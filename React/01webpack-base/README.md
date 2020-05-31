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

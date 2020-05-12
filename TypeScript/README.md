1.npm init -y : 创建package.json文件，里边的内容可以进行修改。  
2.新建 build,src,typings,config文件夹  
3.在src文件夹下，新建api,assets,config,tools,utils文件夹  
4.全局安装依赖：npm install typescript tslint -g  
5.tsc --init创建tsconfig.json配置文件  
6.安装webpack：npm install webpack webpack-cli webpack-dev-server- D，安装为开发依赖  
7.在build文件夹下创建webpack.config.js配置文件  
8.配置webpack.config.js文件  
9.安装ts-loader npm i ts-loader  
10.在package.json文件中配置：  
"scripts": {  
    "test": "echo \"Error: no test specified\" && exit 1",  
    "start":"cross-env NODE_ENV=development webpack-dev-server --config ./build/webpack.config.js"  
  },  
11.安装cross-env   npm i cross-env -D  
12.安装插件：npm i clean-webpack-plugin html-webpack-plugin -D  
13.在src文件夹下创建template文件夹，在template文件夹下创建index.html  
14.在项目中安装typescript  npm i typescript -D  
15.  
"scripts": {  
    "test": "echo \"Error: no test specified\" && exit 1",  
    "start": "cross-env NODE_ENV=development webpack-dev-server --config ./build/webpack.config.js",  
    "build":"cross-env NODE_ENV=production webpack --config ./build/webpack.config.js",  
  },  
16.npm run build进行打包  
1.全局安装node npm express  npm iinstall express -g  
2.创建项目：express 项目名  
3.cd 项目, npm install  
4.npm start启动项目，默认的端口号为3000  
5.配置app.js文件：var http = require('http');  
                 var server = http.createServer(app);  
                 // module.exports = app;  
                 server.listen(3000);  
    node app.js启动服务  
6.安装mysql数据库：npm install mysql --save  
7.打开电脑上安装的SQLyog,我的用户名默认为root，密码默认为空，打开  
Wampser后直接点击连接即可进入软件，然后开始创建数据库和表，填内容。  
8.项目中创建util文件夹，在util内创建dbconfig.js配置文件，用来连接数据库  
9.项目中创建controllers文件夹，在controllers内创建cateControllers.js文件，  
用来写获取数据库内容的代码，并导出。  
10.index.js导入cateControllers文件并调用其中的方法，将数据库的内容显示到页面上。  
11.npm install nodemon -g  
然后可以用热启动来打开项目nodemon app.js  

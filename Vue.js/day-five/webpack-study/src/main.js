//项目JS的入口文件
//为了解决浏览器中天生没有模块化的问题，ES6中提出了import和exports的概念

//ES6
import $ from 'jquery'

//这是jquery的入口函数
$(function(){
    $('li:odd').css('backgrundColor','green');
    $('li:even').css('backgrundColor',function(){
        return '#'+'00ff00'
    });
})

//使用webpack-dev-server这个工具，能够提供类似于nodemon的功能，并自动编译项目代码
//webpack-dev-server这个工具，要求在本地安装webpack
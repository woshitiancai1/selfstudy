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
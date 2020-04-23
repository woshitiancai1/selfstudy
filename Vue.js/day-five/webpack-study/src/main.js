//这是项目的入口文件

//导入jquery
import $ from 'jquery'

//实现奇偶行变色
$(function(){
    $('li:odd').css("backgroundColor","green");
    $('li:even').css("backgroundColor","yellow");
})
//这是项目的入口文件

//导入jquery
import $ from 'jquery'

//导入css样式表
import mystyle from './css/index.css'

//实现奇偶行变色
$(function(){
    $('li:odd').css("backgroundColor","green");
    $('li:even').css("backgroundColor","yellow");
})

//默认情况下，webpack只能默认打包处理后缀名为.js的文件
//无法处理其它后缀名的文件
//如果想要使用webpack打包处理非JS类型的文件，那么，需要在项目中配置合适的loader

//1.如果想要处理.css的文件，需要安装并配置两个合适的loader[style-loader和css-loader]
//cnpm i style-loader css-loader -D
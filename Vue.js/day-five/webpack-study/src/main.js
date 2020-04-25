//这是项目的入口文件

//导入jquery
import $ from 'jquery'

//导入css样式表
//import mystyle from './css/index.css'
import './css/index.css'

//导入less样式表
import './css/index.less'

//导入scss文件
import './css/index.scss'

//在webpack中，把所有的静态资源，都可以看成一个个的模块
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



//ES6中的新语法，是ES6中实现面向对象编程新方式
//webpack默认只能帮我们处理一小部分的ES6新特性
// class Person {
//     static info = {name:'zhangsan'}
// }
// console.log(Person.info)

//c as cc为对c取别名为cc
import m1,{c as cc} from './js/01导入和导出.js'
//console.log(m1);

//import './js/02class实现面向对象编程'
import './js/03使用class实现面向对象编程'
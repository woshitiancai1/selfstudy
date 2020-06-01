//1.导入包
import React from 'react'
import ReactDOM from 'react-dom'

//2.创建虚拟DOM元素
// const mydiv = React.createElement('div', {
//     id: 'mydiv',
//     title: 'div aaa'
// }, '这是一个div元素');
//HTML是最优秀的标记语言
//注意：在JS文件中，默认不能写这种HTML语言，否则打包会失败
//可以使用babel来转换这些JS中的标签
//这种在JS中混合写入类似HTML的语法，叫做JSX语法，符合XML规范的JS
//JSX语法的本质，是在运行的时候，被转换成了React.createElement形式来执行的
const mydiv = < div id = "mydiv"
title = "div aaa" > 这是一个div元素 < /div>

//3.调用render函数渲染
ReactDOM.render(mydiv, document.getElementById('app'));
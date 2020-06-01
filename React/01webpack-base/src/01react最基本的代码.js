console.log("薛明星是天才,hhah");
//webpack-dev-server打包好的main.js是托管到了内存中，所以在项目根目录中看不到。
//但是我们可以认为，在项目的根目录中有一个看不见的main.js

//1.这两个导入的时候，接收的成员名称，必须这么写
import React from 'react' //创建组件和虚拟DOM元素、生命周期
import ReactDOM from 'react-dom' //把创建好的组件的和虚拟DOM放到页面上展示
//2.创建虚拟DOM元素
//参数1位创建的元素的类型，字符串，表示元素的名称
//参数2是一个对象或者null,表示当前这个DOM的属性
//参数3：子节点，包括其它虚拟DOM，获取文本子节点
const myh1 = React.createElement('h1', {
    id: 'myh1',
    title: 'this is a h1'
}, '这是一个大大的H1');
const mydiv = React.createElement('div', null, '这是一个div元素', myh1);
//渲染页面上的DOM结构，最好的方式就是写HTML代码

//3.使用ReactDOM把虚拟DOM渲染到页面上
//参数1：要渲染的那个虚拟DOM元素
//参数2：指定页面上一个容器
ReactDOM.render(mydiv, document.getElementById("app"));
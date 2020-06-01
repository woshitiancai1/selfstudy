//1.导入包
import React from 'react'
import ReactDom from 'react-dom'

//第一种创建组件的方式：
function Hello(props) { //props接收到调用这个组件所传入的数据，是一个对象
    // return null;表示此组件什么都不渲染
    return <div > 这是一个合法的JSX虚拟DOM元素 { props.name } < /div>
}

//3.调用render函数
ReactDOM.render( < div >
        <
        Hello name = "zhangsan" / >
        <
        /div> , document.getElementById("app"))
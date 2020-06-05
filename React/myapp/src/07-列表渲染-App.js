import React, { Component } from 'react';
import './App.css'

// React列表渲染

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            list:[
                {
                    title:'第一节课React事件',
                    content:'事件内容'
                },
                {
                    title:'第二节课',
                    content:'数据传递内容'
                },
                {
                    title:'第三节课',
                    content:'列表渲染'
                }
            ]
        }
    }
    event=(index,item)=>{
        console.log(index);
        console.log(item)
    }
    render(){
        let listArr = this.state.list.map((item,index)=>{
            return(
                //每一项都有一个独一无二的key值
                <li key={index}>
                    {/* 这里的item得到的是一个对象 */}
                    <h1>{item.title}</h1>
                    <h1>{item.content}</h1>
                </li>
            )
        })
        return(
            <div>
                <h1>React课程的内容为：</h1>
                <ul>    
                    {listArr}
                </ul>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                <li key={index} onClick={(e)=>{this.event(index,item)}}>
                                    <h1>{item.title}</h1>
                                    <p>{item.content}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default App;
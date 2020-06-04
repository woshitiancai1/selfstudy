import React, { Component } from 'react';
import './App.css'

// React事件：
//1.react事件绑定事件的命名采用驼峰命名法
//2.
class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    parentEvent=(e)=>{
        console.log(e);
        e.preventDefault();//可以取消点击事件的默认行为
    }
    parentEvent1=(e)=>{
        console.log(e);
    }
    render(){
        return(
            <div onClick={this.parentEvent}>
                <div>
                    nihao
                </div>
                
                <button onClick={()=>{this.parentEvent1('xue')}}>传递参数</button>
                {/* this.parentEvent1('xue').bind(this)：给函数绑定this以后可以不用
                写成箭头函数的形式 */}
                <button onClick={()=>{this.parentEvent2('xue').bind(this)}}>传递参数</button>
            </div>
        )
    }
}

export default App;
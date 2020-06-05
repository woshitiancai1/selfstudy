import React, { Component } from 'react';
import './App.css'

// React条件渲染：
function UserGreet(props){
    return(
        <h1>欢迎登录</h1>
    )
}
function UserLogin(props){
    return(
        <h1>请先登录</h1>
    )
}
class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLogin:true,
        }
    }
    render(){
        // if(this.state.isLogin == false){
        //     return(
        //         <UserGreet/>
        //     )
        // }
        // else{
        //     return(
        //         <UserLogin/>
        //     )
        // }
        return(
            <div>
                {/* 三元运算符实现组件的判断 */}
                {this.state.isLogin?<UserLogin/>:<UserGreet/>}
            </div>
        )
    }
}

export default App;
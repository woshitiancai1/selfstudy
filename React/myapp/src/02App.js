import React, { Component } from 'react';
import './App.css'
class App extends Component{
    constructor(props){
        super(props)
        //状态state,相当于vue里面的data
        this.state = {
            time:new Date().toLocaleTimeString(),
        }
    }
    //生命周期函数
    componentDidMount(){//组件渲染完成时调用的函数
        setInterval(()=>{
            this.setState({//修改数据用setState
                time:new Date().toLocaleTimeString(),
            })
        },1000)
    }
    render(){//render是视图部分，也就是在页面上显示的内容
        // this.state.time = new Date().toLocaleTimeString()
        return(
            <div>
                <h1 className="bgc">helloWorld</h1>
                {/* class中，不可以存在多个class属性*/}
                <h2>{this.state.time}</h2>
            </div>
        )
    }
}

export default App;
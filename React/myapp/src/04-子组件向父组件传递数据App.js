import React, { Component } from 'react';
import './App.css'

//调用父元素的函数，从而操作父元素的数据。
//来实现数据从子元素，传递到父元素
class ParentCom extends Component{
    constructor(props){
        super(props)
        this.state = {
            childData:null,
        }
    }
    setChildData=(data)=>{
        this.setState({
            childData:data,
        })
    }
    render(){
        return(
            <div>
                <h1>子元素传递给父元素的数据：{this.state.childData}</h1>
                <ChildCom setChildData={this.setChildData}/>
                {/* 父组件调用子组件的时候向子组件传递一个函数 */}
            </div>
        )
    }
}

class ChildCom extends Component{
    constructor(props){
        super(props)
        this.state = {
            msg:'helloworld'
        }
    }
    sendData=()=>{//箭头函数的this指向当前的对象
        //这里的箭头函数的this指向ChildCom这个组件
        console.log(this.props.setChildData);
        // 子组件调用父组件传递的函数传入参数
        this.props.setChildData(this.state.msg);
    }
    render(){
        return(
            <div>
                <button onClick={this.sendData}>向父元素传递helloWorld</button>
            </div>
        )
    }
}

class App extends Component{
    constructor(props){//props为父传递给子组件的数据，是单向流动的，不能子传给父
        //props可以传递父元素的函数，就可以去修改父元素的state，从而达到传递数据
        //给父元素
        super(props)//props传值可以是任意的类型
        this.state = {
            
        }
    }
    render(){
        return(
            <div>
            
            </div>
        )
    }
}

export default ParentCom;
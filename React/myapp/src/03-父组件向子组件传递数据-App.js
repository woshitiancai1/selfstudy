import React, { Component } from 'react';
import './App.css'
class Parent extends Component{
    constructor(props){
        super(props)
        this.state = {
            isActive:true,
        }
    }
    render(){
        return(
            <div>
                <button>控制子元素显示</button>
                <ChildCom isActive={this.state.isActive}/>
                //这里的父组件在调用子组件的时候，传入了一个参数。这个参数是一个对象，
                //有属性值和属性名
            </div>
        )
    }
}

class ChildCom extends Component{
    constructor(props){//这里的props接收父组件传递进来的对象类参数
        super(props)
    }
    componentDidMount(){
        if(this.props.isActive == true){
            console.log("false");
        }
    }
    render(){
        let element = null;
        if(this.props.isActive == true){//this.props.isActive可以得到具体的属性值
            return  true;//this.props得到是这个参数，包括属性名和属性值
        }
        return(
            <div>
                
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

export default App;
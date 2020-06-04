import React, { Component } from 'react';
import './App.css';

// function App() {
//     let time = new Date().toLocaleTimeString();
//     let str = "当前的时间是:"
//     return ( 
//     <div>
//         <h1>这里是函数式组件渲染</h1>
//         <h1>{str + time}</h1>
//         {/* {}里面可以写三元运算符 */}
//     </div>
//     );
// }
// function App(){
//     let man = '发热';
//     return(
//         <div>
//             <h1>{man=="发热"?<button>隔离</button>:"在家躺着"}</h1>
//         </div>
//     )
// }
// function App(){
//     let logo = 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
//     return(
//         <div className="bgc">
//             <img src={logo}/>
//         </div>
//     )
// }
//函数组件
// function App(props){
//     return(
//         <div>
//             {props}
//         </div>
//     )
// }
//类组件
class App extends Component{
    render(){
        console.log(this)
        return(
            <div>
                {/* this.props 可以接收到所传入的参数，是一个对象。
                然后this.props.name可以得到具体的属性的值 */}
                niao{this.props.name}
            </div>
        )
    }
}
export default App;
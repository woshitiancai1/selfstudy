React:

React 简介
是一个用于构建用户界面的 JavaScript 库
主要用于构建UI，很多人认为 React 是 MVC 中的 V
起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源
拥有较高的性能，代码逻辑非常简单

React 特点
声明式设计 −React 采用声明范式，可以轻松描述应用
高效 −React 通过对 DOM 的模拟，最大限度地减少与 DOM的 交互
灵活 −React 可以与已知的库或框架很好地配合
JSX − JSX 是 JavaScript 语法的扩展，建议使用它
组件 − 通过 React 构建组件，使得代码更加容易得到复用
单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码

React安装：
利用 React 脚手架工具
npm install -g create-react-app
create-react-app my-app
cd my-app
npm start

JSX语法：
JSX是JS与XML结合起来的一种格式，利用HTML语法来创建虚拟DOM

定义组件的两种方式：
（1）函数定义：
function Hello( props ) { 
	return <h1>Hello { props.name }</h1>
} 
ReactDOM.render(
	<Hello name=“ React ”/>, document.getElementById('root')
); 
（2）类组件：
class Hello extends React.Component { 
	constructor( ){         // ES6 对类的默认方法
		super();        // 将父类中的 this 对象继承给子类
		this.state = {
            name:'React'
            }
	}
	render( ) { 
        return <h1>Hello { this.state.name }</h1>; 
        } 
}

//组件生命周期
（1）constructor():初始化。
（2）componentDidMount():组件挂载后立即调用，适用于发送请求
（3）componentDidUpdate():组件更新

//React事件绑定：
（1）采用驼峰命名法，箭头函数
handleClick = ( ) => { }
<button onClick={ this.handleClick }> 
	Click 
</button>
（2）事件处理函数绑定this
constructor( ){        
	super();     
	this.handleClick = this.handleClick.bind( this );
}
<button onClick={ this.handleClick.bind( this ) }> 
	Click 
</button>

//受控组件：
输入的值由React控制的表单元素称为 受控组件
在React中，可变的状态通常保存在组件的状态属性中，并且只能用setState()方法更新。
input textarea select

//非受控组件：
非受控组件将真实数据保存在DOM中，使用defaultValue为表单元素指定初始值，
使用refs获取表单的值

React：
1.React是构建用户界面的JS库，主要用于构建UI界面。
特点：声明式的设计、高效（采用虚拟DOM来实现DOM的渲染，最大限度的减少DOM的操作）
     灵活、JSX（俗称JS写HTML代码）、组件化开发（代码复用）、单向的数据流（
     没有实现数据的双向绑定）、
2.创建项目：
（1）安装脚手架：cnpm i -g create-ceact-app
（2）创建项目：create-react-app appName
3.React元素渲染：
4.JSX语言：
优点：
（1）JSX执行更快，编译为JS代码时进行优化
（2）类型更安全，编译过程如果出错就不能再编译，及时发现错误。
（3）编写模板更加简单快速
注意：
（1）JSX必须要有根节点
（2）正常的普通HTML元素要小写，如果是大写默认认为是组件
5.JSX表达式：
1.如果需要插入变量用{}
2.{}内部可以使用表达式和JSX对象
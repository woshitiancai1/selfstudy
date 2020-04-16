// console.log("a start");
// //引入b.js文件
// require('./b.js')

//可以省略后缀名
// require('./b')

// console.log('a end');
//在node中没有全局作用域，只有模块作用域：两个文件声明的变量互不相关
//默认都是封闭的
//如何让模块与模块之间进行通信

//require方法有两个作用：
//1.加载文件模块并执行里面的代码
//2.拿到被加载文件模块导出的接口对象
//在每个文件模块中都提供了一个接口对象exports
var ret = require('./b');
console.log(ret);//这里得到的是一个对象 {foo:'hello'}
console.log(ret.foo);//得到对象的值
console.log(ret.add(10,30))
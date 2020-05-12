// const s = Symbol();
// console.log(s);
// const s1 = Symbol("s1");//这里的参数是对Symbol的一个标识,不可以传入对象
// console.log(s1);

// let s5 = Symbol('name');
// let info2 = {
//     [s5]:'lison'
// }
// console.log(info2);
// //JSON.stringifn(info2):将对象的转化为JSON数据
// //Object.keys(info2)：返回对象中的属性和方法所构成的数组
// Object.getOwnPropertySymbols(info2);//返回对象中所有的Symbol属性
// //Reflect.ownKeys(info2);返回对象中所有类型的属性构成的数组

// const s8 = Symbol.for("xue");
// console.log(Symbol.keyFor(s8));//获取到用Symbol.for创建的Symbol实例对象的标识

// console.log([1,2,3].concat([4,5]));//把数组元素的类型相同的数组连接起来
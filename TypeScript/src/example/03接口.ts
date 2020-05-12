//基础用法
// const getFullName = ({firstName,lastName}) =>{
//     return `${firstName} ${lastName}`
// }
// interface NameInfo {
//     firstName:string,
//     lastName:string
// }

// interface Vegetable {
//     color?:string,//表明color属性是字符串类型，且是可选的
//     readonly type:string//type属性是字符串类型且只可读
// }
// //利用接口来定义对象
// const VegetableObj : Vegetable{
//     type:'totm',
// }

// //定义数组接口
// interface ArrInter { 
//     0:number,
//     readonly 1:string//0和1分别代表数组元素的索引值
// }
// let arr:ArrInter  = [0,"1"];

// //接口定义函数
// interface addFunction {
//     (num1:number,num2:number):number//表明函数的第一个和第二个参数均为number类型
//     //函数的返回值也为number类型
// }
// const add:addFunction = (n1,n2) => n1+n2;

// //接口定义索引类型
// interface RoleDic {
//     [id:number]:string,//索引的属性名为number类型，属性值为string类型
// }
// const role : RoleDic = {
//     0:'abc',
// }



//接口的继承
// interface Vegetables {
//     color:string
// }
// interface Tomato extends Vegetables{
//     radius:number
// }
// interface Carrot {
//     length:number,
// }
// const tomato:Tomato = {
//     radius:1,
//     color:'red'
// }



//混合类型接口
// interface Counter {
//     ():void,
//     count:number
// }
// const getcountr = ():Counter => {
//     const c = ()=>{c.count++}
//     c.count = 0
//     return c
// }
// const counter :Counter = getcountr();
// counter();
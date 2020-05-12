//函数类型
// function add(x:number,y:number):number{
//     return x+y;
// }
// const add1 = (x:number,y:number) => {
//     x+y;
// }
let add:(x:number,y:number):number
add = (arg1:number,arg2:number):number =>{
    return arg1+arg2;
}

//函数参数
type AddFunction = (arg1:number,arg2:number,arg3?:number) => number//第三个参数为可选参数
let addFun : AddFunction
addFun = (x:number,y:number) => x+y;

//拆解操作符
let arr = [1,2,3];
let arr2 = [...arr];
console.log(arr2);
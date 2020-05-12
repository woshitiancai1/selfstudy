// //布尔类型
// let bool:boolean = false;//
// //数值类型
// let num1:number = 10;//可以给num1赋二进制、八进制、十六进制的数
// //字符串类型
// let str:string = "abc";
// str = `数值是${num1}`
// console.log(str)
// //数组
// let arr1:number[];//表明数组里的元素都是number类型的
// arr1 = [1,23,4,5]
// let arr2:Array<number> //表明数组里的元素都是number类型的
// let arr3:(string|number)[];//联合数组类型
// //元组类型
// let tuole:[string,number,boolean]
// tuole = ["abc",2,true];
// //枚举
// enum Roles {
//     USER,
//     NAME
// }
// //any类型：可以是任何类型
// let value:any
// value = 123;
// value = "string";
// value = [1,"2",true];
// //void类型：什么类型都不是
// const Text1 = (text:string):void =>{
//     console.log(text);
// }
// Text1("123");
// //null和undefined,赋值是固定的
// let u:undefined;
// u = undefined;
// let n:null;
// n = null;
// //never类型

// //Object类型
// let obj = {
//     name:'xue'
// }
// let obj2 = obj;//这时是把obj的地址赋给obj2
// obj2.name="ming";//修改的是地址里面的内容
// console.log(obj);//ming
// //类型断言
// // const getLength = target1 => {
// //     if(target1.length || target1.length===0){
// //         return target1.length
// //     }
// //     else{
// //         return target1.toString().length
// //     }
// // }
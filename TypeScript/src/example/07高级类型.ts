//1.交叉类型
// const mergeFunc = <T,U>(arg1:T,arg2:U):T & U=> {//T & U表明返回值类型为交叉类型
//     let res= {} as T & U;
//     res = Object.assign(arg1,arg2);//把arg1和arg2合并成一个对象
//     return res;
// }
// mergeFunc({a:'a'},{b:'b'});

//2.联合类型
//type1 | type2 | type3
// const getLengthFunc = (content:string|number):number => {
//     //content:string|number：表明参数的类型可以是字符串或者是数字类型
//     if(typeof content == 'string'){
//         return content.length;
//     }
//     else{
//         return content.toString().length;
//     }
// }
// getLengthFunc(124);

//3.类型保护
// const valueList = [123,'abc'];
// const getRandomValue = () =>{
//     const number = Math.random() * 10;
//     if(number < 5){
//         return valueList[0]
//     }
//     else{
//         return valueList[1]
//     }
// }
// const item = getRandomValue();
// function isString(value: number | string): value is string{
//     return typeof value == 'string'
// }
// //类型保护
// if(isString(item)){
//     console.log(item.length)
// }
//or:typeof类型断言
// if(typeof item == 'string'){
//     console.log(item.length)
// }
// if((item as string).length){
//     //item as string:类型断言，指定item就为字符串类型
//     console.log((item as string).length)
// }
//typeof只能比较:string/number/boolean/symbol的其中一种作为类型保护

//4.null和undefined
//（1）它俩是任何类型的子类型
// let value = 123;
// value = undefined;
// const getLengthFunction = (value:string | null):number => {
//     if(value == null){
//         return 0;
//     }
//     else{
//         return value.length;
//     }
// }

//5.类型别名
// type TypeString = string;//给string类型起别名为TypeString
// let str : TypeString;
// type PositionType<T> = {x:T,y:T}
// const positionOne : PositionType<number> = {
//     x:1,
//     y:-1
// }
// const positionTwo : PositionType<string> = {
//     x:'a',
//     y:'b'
// }
// //接口的形式
// interface Interface {
//     num : number
// }
// let _interface : Interface = {
//     num:123
// } 

//6.字面量类型
//(1)字符串字面量类型
type Name = 'Lison'//这里的Lison作为字符串字面量来使用
const name1 : Name = 'Lison'//这里的赋值只能赋Lison
//（2）联合类型
type Direction = 'north' | 'east' | 'south' | 'west'
function getDirectionFirstLetter(direction : Direction){
    return direction.substr(0,1)
}
getDirectionFirstLetter('east');//传值的时候只能传'north' | 'east' | 'south' | 'west'中的一种
//（3）数字字面量类型
type Age = 18;
interface InfoInterface { 
    name : string,
    age : Age,
}
const info : InfoInterface = {
    name:'s',
    age:18
}
//(4)枚举成员类型

import { Stats } from "webpack";

interface Info {
    name:string,
    info:{age:number}
}
let infos:Info;
const info1 = {name:'zhngasan',info:{age:18}};
infos = info1;//info1是一个对象，这个对象完全符合接口所定义的内容
//在info1中，要包含接口中的全部字段

//参数个数
let x = (a:number) => 0;
let y = (b:number,c:string) => 0;
y = x;
//x = y;//会报错，因为后面的函数的参数个数必须要小于等于左边的函数的参数个数
//且对应位置的参数的类型必须相同

//可选参数和剩余参数
const getSum = (arr:number[],callback:(...args:number[]) => number):number => {
    return callback(...arr)
}//getSum函数的第一个参数
//为number类型的元素构成的数组，第二个参数是一个回调函数，且函数类型为：任意多个参数，
//参数为number类型的数组

//函数参数双向协变
let funA = (arg:number | string) : void =>{

}
let funB = (arg:number) :void => {}
funA = funB;
funB = funA;//参数类型只能由情况多的赋值给情况少的，返回值类型也是同理

//函数重载
function merge(arg1:number,arg2:number):number
function merge(arg1:string,arg2:string):string
function merge(arg1:any,arg2:any){
    return arg1 + arg2;
}

//枚举
enum StatusInterface {
    On,
    Off,
}
let s = StatusInterface.On;
s = 2;

//类的兼容性
class AnimalClass {
    public static agr : number
    constructor(public name:string){

    }
}
class PeopleClass {
    public static agr :string
    constructor(public name:string){

    }
}

//泛型的兼容性
interface Data<T>{}
let data1:Data<number>
let data2:Data<string>

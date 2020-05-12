//定义一个函数，有两个参数，第一个参数可以为任何类型，
//第二个参数为number类型，默认值为5
const getArray = <T>(value:any,times:number = 5) => {
    return new Array(times).fill(value);
}
getArray(2);
console.log(getArray<number>(123,3).map((item)=>item))
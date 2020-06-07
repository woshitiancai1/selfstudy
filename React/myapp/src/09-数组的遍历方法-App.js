import React, { Component } from 'react';
import './App.css'

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    // 组件的生命周期
    render(){
        //数组的Map和foreach的区别
        let arr = [1,2,3,4,5,6];
        arr.forEach((item,index)=>{//foreach方法用来直接遍历数组,没有返回值
            console.log(item);//item为每一项，index为索引值
        })
        let arr3 = arr.map((item,index,arr)=>{//map方法有返回值，
            //对数组的每一项进行加工，加工完成后返回一个新的数组
            let str = index + item;//对数组的每一项都加上本身的索引值，组成一个新数组
            return str;//把这个新的数组返回
        })
        console.log(arr3);

        //数组的reduce和filter
        let arr4 = [1,2,3,4,5,6,7,8,9];
        //filter过滤就是将想要的内容进行删选，不要的内容去除,返回想要的内容的新数组
        let arr44 = arr4.filter((item,index,arr4)=>{
            if(item % 2 == 0){
                return true;//return true;表明元素要留下
            }
            else{
                return false;//return false;表明元素不要
            }
        })
        console.log(arr44);
        //reduce是对整个数组进行整合，返回一个新数组
        //比如要将数组里所有的数字相加:
        let result = arr4.reduce((pre,next,index)=>{
            return pre + next;//整合过程为先1+2，所得值+3，所得值+4。
            //依此类推，算出数组的所有元素的和
        },0);//这里设置初始值为0
        console.log(result)

        //数组的for of和for in方法
        //for...in...方法用于遍历对象，不用于遍历数组
        //for...of...可以用来遍历数组、类数组的对象、字符串
        let obj = {
            name:'xue',
            age:20,
            type:'tiancai'
        }
        for(var key in obj){
            console.log(key,obj[key]);//这里的key是对象里面的属性名，
            //obj[key]可以得到对象里面的相对应属性名的属性值
        }
        let arr5 = ['a','b','c','d','e'];
        for(let item of arr5){//这里是循环的每一项
            console.log(item);
        }
        return(
            <div>
                
            </div>
        )
    }
}

export default App;
import React, { Component } from 'react';
// 导入数据
import jsonData from './list-by-area-code.json'
import './App.css'

// React实现制作疫情地图
let time = {

}
jsonData.data.list.forEach((item,index)=>{
    time[item.date] = {
        date:item.date,
        extData:item.extData,
        astUpdateTime:item.astUpdateTime,
        today:item.today,
        total:item.total,
    }
})
console.log(time)
class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            numData:time
        }
    }
    render(){
        
        return(
            <div>
                <h1>爬虫数据：</h1>
                <ul>
                    <li>
                        <span>date:</span>
                        <span>extData:</span>
                        <span>astUpdateTime:</span>
                        <span>today:</span>
                        <span>total:</span>
                    </li>
                    {
                        this.state.numData.forEach((item,index)=>{
                            return(
                                <li>
                                    <span>{item.date}</span>
                                    <span>{item.extData}</span>
                                    <span>{item.astUpdateTime}</span>
                                    <span>{item.today}</span>
                                    <span>{item.total}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default App;
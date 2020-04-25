fetch("")
.then(res=>{//第一个.then中拿不到最终的数据
    // console.log(res)
    return res.json()
}).then(res=>{//可以得到最终的数据
    console.log(res);
})

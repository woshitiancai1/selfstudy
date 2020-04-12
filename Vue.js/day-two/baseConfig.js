//注意：axios.create()方法调用的返回值，是一个新的axios实例，在调用create函数的时候
    //可以初始化一些默认配置项，比如：请求的baseURL地址
    Vue.prototype.$http = axios.create({
        baseURL:'http://39.106.32.91:3000'
    })
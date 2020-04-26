//这是项目的JS包入口文件
//import Vue from "vue"//这里导入的Vue和网页中直接用script导入的Vue不一样
//官方不推荐在webpack构建的vue项目中使用如下的方式构建
//没有把组件化的思想发挥到极致

import Vue from '../node_modules/vue/dist/vue.js'
const login = {
    template:'<h3>这是登录组件</h3>'
}

const vm = new Vue({
    el:"#app",
    render:c=>c(login)
})
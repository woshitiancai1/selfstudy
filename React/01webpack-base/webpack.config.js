//向外暴露一个打包的配置对象
//因为webpack是基于Node构建的，所以webpack支持所有的Node API和语法
module.exports = {
    mode: 'development', //开发环境main.js不会被压缩
    //在webpack 4.x中，约定大于配置。约定：默认的打包入口路径是：src目录下的index.js
    //目的是尽量减少配置文件的体积
    //打包的输出文件未dist目录下面的main.js
}

//export default{}为ES6中导出模块的API，不是Node的API，
//与之对应的是import ** from '文件路径'
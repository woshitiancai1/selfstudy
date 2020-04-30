const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry:'./src/index.ts',//编译的入口文件
    output:{
        filename:"main.js"
    },
    resolve:{
        extensions:[".tsx",".ts",".js"]
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude:/node_modules/,//编译的时候不处理node_module文件
            }
        ]
    },
    devtool:process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
    devServer:{
        contentBase:'./dist',
        stats:'errors-only',//只有在控制台有错误的时候才会打出
        compress:false,
        host:'localhost',
        port:8089
    },
    plugins:[//插件
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:['./dist']
        }),
        new HtmlWebpackPlugin({
            template:'./src/template/index.html',
        })
    ]
}
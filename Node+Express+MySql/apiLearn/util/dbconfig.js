const mysql = require('mysql');
module.exports = {
    //数据库配置
    config:{
        host:'localhost',
        port:'3306',
        user:'root',
        password:'',
        //数据库的名称
        database:'woshitiancai'
    },
    //连接数据库,使用mysql的连接池的方式
    //连接池的对象
    sqlConnect:function(sql,sqlArr,callBack){
        var pool = mysql.createPool(this.config);
        pool.getConnection((err,conn) => {
            console.log("123");
            if(err){
                console.log("连接失败");
                return ;
            }
            //事件驱动回调
            conn.query(sql,sqlArr,callBack);
            //释放链接
            conn.release();
        })
    }
}
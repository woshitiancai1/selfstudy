var dbConfig = require("../util/dbconfig");
//获取分类
getCate=(req,res) => {
    var sql = "select * from cate";
  var sqlArr = [];
  var callBack = (err,data) => {
    if(err){
      console.log('连接出错');
    }
    else{
      res.send({
        'list':data,
      })
    }
  }
  dbConfig.sqlConnect(sql,sqlArr,callBack);
}
//利用所传入的id值获取指定分类的文章列表
getPostCate=(req,res)=>{
  let {id} = req.query;//用解构赋值，获取到访问路由的时候所传入的id值
  var sql = `select * from post where cate_id=?`;
  var sqlArr = [id];
  var callBack = (err,data) => {
    if(err){
      console.log('连接出错');
    }
    else{
      res.send({
        'list':data,
      })
    }
  }
  dbConfig.sqlConnect(sql,sqlArr,callBack);
}
module.exports = {
    getCate,
    getPostCate
}
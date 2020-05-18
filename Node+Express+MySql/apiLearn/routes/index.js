var express = require('express');
var router = express.Router();
var cate = require("../controllers/cateControllers")
/* GET home page. */
//当浏览器的路由为'/'的时候，调用导入进来的cate的getCate方法
router.get('/',cate.getCate);
//当浏览器的路由为'/getPostCate'的时候，调用导入进来的cate的getPostCate方法
router.get('/getPostCate',cate.getPostCate);
module.exports = router;
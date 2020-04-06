var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//get请求，ajax函数封装的路由
app.get('/first',(req,res)=>{
  res.send('xuemingxing');
});

// 验证邮箱地址唯一性
// app.get('/youxiang',(req,res)=>{
//   //接收用户传递过来的邮箱地址
//   var email = req.query.email;
//   //判断邮箱注册过的情况
//   if(email == '2590919679@qq.com'){
//     res.status(400).send({message:'邮箱地址已经注册过了，请更换其他邮箱地址'})
//   }
//   else{
//     res.send({massage:'恭喜，邮箱可用'})
//   }
// })


//搜索框内容自动提示

app.listen(3000);
console.log("服务器启动成功!");
// module.exports = app;
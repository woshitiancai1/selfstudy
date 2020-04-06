// //封装Ajax函数
// function ajax(options){
//     var defaults = {
//         type:'get',
//         url:'',
//         data:'',
//         header:{'Content-Type':'application/x-www-form-urlencoded'},
//         success:function(){},
//         error:function(){}
//     }
//     //使用options对象中的属性覆盖defaults对象中的属性
//     Object.assign(defaults,options);
//     //创建ajax对象
//     var xhr = new XMLHttpRequest();
//     //拼接请求参数的变量
//     var params = "";
//     //循环用户传递进来的对象格式参数
//     for(var attr in defaults.data){
//         params += attr + '=' + defaults.data[attr] + '&';
//     }
//     //去掉请求参数的最后一个&
//     params = params.substr(0,params.length-1);
//     //判断请求方式
//     if(defaults.type == 'get'){
//         defaults.url = defaults.url + '?' + params;
//     }
//     xhr.open(defaults.type,defaults.url);
//     if(defaults.type == 'post'){
//         //ContentType变量用来存放请求参数的格式的类型
//         var ContentType = defaults.header['Content-Type'];
//         //设置请求参数的格式的类型
//         xhr.setRequestHeader('Content-Type',ContentType);
//         //判断请求参数的格式的类型
//         if(ContentType == 'appliaction/json'){
//             xhr.send(JSON.stringify(defaults.data));
//         }
//         else{
//             xhr.send(params);
//         }
//     }
//     else{
//         xhr.send();
//     }
//     xhr.onload = function(){
//         //获取响应头中的数据
//         var contentType = xhr.getResponseHeader('Content-Type');
//         //服务器端返回的数据
//         var responseText = xhr.responseText;
//         //如果相应类型中包含application/json
//         if(contentType.includes('application/json')){
//             //将JSON字符串转换为JSON对象
//             responseText = JSON.parse(responseText);
//         }
//         //判断返回的状态码
//         //请求成功，调用请求成功的函数
//         if(xhr.status == 200){
//             options.success(responseText,xhr);
//         }
//         //请求失败，调用请求失败的函数
//         else{
//             options.error(responseText,xhr);
//         }
//     }
// }
// //调用ajax函数
// ajax({
//     type:'get',
//     url:'http://localhost:3000/first',
//     //data作为传递的参数，写成对象的格式
//     data:{
//         name:'zhangsan',
//         age:20
//     },
//     //header设置请求参数的格式的类型
//     header:{
//         'Content-Type':'application/json'
//     },
//     success:function(data){//data作为参数，接收服务器端向客户端响应的数据
//         console.log(data);
//     },
//     error:function(data){
//         console.log("error"+data);
//         console.log(xhr);
//     }
// })


// //验证邮箱地址唯一性
// //将封装的Ajax函数放在一个单独的JS文件中，需要时引入
// <script src='/js/ajax.js'></script>
// //获取页面中的元素
// var emailInp = document.getElementById("email");
// var info = document.getElementById("info");
// //当文本框离开焦点以后
// emailInp.onblur = function(){
//     //获取用户输入的邮箱地址
//     var email = this.value;
//     //验证邮箱地址的正则表达式
//     var reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
//     //如果用户输入的邮箱地址不符合规则
//     if(!reg.test(email)){
//         //给出用户提示
//         info.innerHTML = '请输入符合规则的邮箱地址';
//         //为p标签添加类名,让提示信息显示为错误提示信息的样式
//         info.className = 'bg-danger';
//         //阻止程序向下执行
//         return ;
//     }
//     //如果用户输入的邮箱地址符合规则
//     else{
//         //向服务器端发送请求
//         ajax({
//             type:'get',
//             url:'http://localhost:3000/youxiang',
//             data:{
//                 email:email,
//             },
//             success:function(result){
//                 info.innerHTML = result.message;
//                 info.className = 'bg-success';
//             },
//             error:function(result){
//                 info.innerHTML = result.message;
//                 info.className = 'bg-danger'
//             }
//         });
//     }
// }


// //搜索框内容自动提示
// //将封装的Ajax函数放在一个单独的JS文件中，需要时引入
// //<script src='/js/ajax.js'></script>
// //引入模板文件
// //import { Template } from "ejs";
// //<script type="text/html" id="tpl">
//     // {{each result}}
//     //     <li class='list-group-list'>{{$value}}</li>
//     // {{/each}}
// //</script>
// //获取搜索框
// var seachInp = document.getElementById('search');
// //获取提示文字的存放容器ul
// var listBox = document.getElementById('list-box');
// //给搜索框添加用户输入事件，当用户在文本框中输入的时候触发
// seachInp.oninput = function(){
//     清除上一次开启的定时器
//     clearTimeout(timer);
//     //获取用户输入的内容
//     var key = this.value;
//     //如果用户没有在搜索框中输入内容
//     if(key.trim().length == 0){
//          listBox.style.display = 'none';
//     //阻止程序向下执行
//          return;            
//      }
//     //向服务器端发送请求
//     //向服务端索取金额用户输入关键字相关的内容
//     //开启一个延时定时器，让请求延时发送
//      var timer = setTimeout(function(){
//      ajax({
//         type:'get',
//         url:'http://localhost:3000/sousuo',
//         data:{
//             key:key
//         },
//         success:function(result){
//             //使用模板引擎拼接字符串
//             var html = Template('tpl',{result:result});
//             //将拼接好的字符串显示在页面中
//             listBox.innerHTML = html;
//             //显示ul容器
//             listBox.style.display = 'block';
//         }
//     })
// }    
//},800)



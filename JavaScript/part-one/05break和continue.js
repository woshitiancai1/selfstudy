//break关键字只能用于switch语句或者循环语句内
//break关键字，会立即终止离他最近的那个循环语句

//continue用来跳过档次循环
//只对它最近的那个循环产生影响
for(var i=0;i<5;i++){
    if( i == 2){
        continue;//跳过i=2这次循环
    }
    console.log(i);//0,1,3,4
}
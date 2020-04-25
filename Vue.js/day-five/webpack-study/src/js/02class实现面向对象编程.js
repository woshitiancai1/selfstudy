//传统定义一个Person类
function Person(name,age) {
    //这里的name和age叫做实例属性，实例属性只能通过new出来的实例对象访问
    this.name = name;
    this.age = age;
}
Person.info = "这是一个构造函数";//这里的info是静态属性，静态属性只能通过构造函数访问
Person.prototype.show = function(){
    console.log("传统形式下定义的实例方法")
}
//通过person.show()来访问
var person = new Person("xueming",20);
console.log(Person.info);


//ES6:class关键字定义类
 class Per {
    constructor(name,age){//constructor是构造函数的意思
        //这里的name和age叫做实例属性，实例属性只能通过new出来的实例对象访问
        this.name = name;
        this.age = age;
    }
     //static关键字专门用来创建静态属性
    static info = "这是使用class关键字定义的类"
     //静态方法
    static show(){
        console.log("这是静态方法");
    }
    //这是ES6中定义的实例方法
    showName(){//通过p2.showName访问实例方法
        console.log(this.name);//xue
    }
}
//每当new Per()的时候，必然会优先调用Per上的constructor
var p2 = new Per("xue",20);//通过实例对象点出来的属性叫做实例属性
console.log(Per.info);//通过类点出来的属性叫做静态属性
Per.show();
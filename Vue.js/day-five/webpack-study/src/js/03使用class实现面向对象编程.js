class Person {
    //在class的花括号作用域中只能写constructor函数、静态方法
    //静态属性、实例方法

    //在class类中，必须有一个constructor，如果你没有定义，系统会
    //提供一个看不见的constructor
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    //实例方法
    sayHello(){
        console.log("name"+this.name)
    }
}
// var p1 = new Person('xue',20);
// console.log(p1.name)

//创建一个广东人的类
// class GDRen {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }
class GDRen extends Person {
    constructor(name,age){
        //注意：如果子类通过extends关键字实现了继承，则在子类的构造函数中，必须
        //先调用super这个父类的构造函数，才能使用this
        super(name,age);//会把子类的name和age传到父类
        this.name = name;
        this.age = age;
    }
}
var gd1 = new GDRen('xue',20)


//面向对象：就是把一些功能性的代码，封装到具体的类中，如果需要什么功能，就new什么样
//的类，这样，既提高代码的复用性，也提高开发的效率和协作开发的体验。
//面向对象就是封装
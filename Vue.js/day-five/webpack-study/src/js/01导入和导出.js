var a = 10;

//module.exports是和require配合使用的
//

export default {
    a:10
}

export var c = '哈哈哈'
//结论一：在模块中使用exports default向外暴露成员，只能唯一
//结论二：使用exports default向外暴露的成员对象，可以使用任何合法的变量名接受
//结论三：exports default和exports可以同时使用
//结论四：使用import 变量名 from 标识符 这种形式导出的变量默认只能拿到exports default导出的成员，拿不到exports导出的成员
//结论五：使用export导出的成员只能使用import {成员名} from '标识符'进行接收，这种形式叫做按需导出
//结论六：export导出成员可以导出多次
HTML与CSS + H5与CSS3  
一：认识web  
1.网页主要由图片、连接、文字等元素组成，还包括音频和视频。  
2.浏览器是网页显示、运行的平台。  
3.浏览器内核：  
-浏览器内核包括两部分，渲染引擎和JS引擎。渲染引擎负责服务网页内容，整理讯息，计算网页的显示方式并显示页面。JS引擎是解析执行JS获取网页的动态效果。后来。JS引擎独立，内核就只倾向于渲染引擎。  
-谷歌浏览器的内核为Blink，大部分国产浏览器均采用Blink内核进行二次开发  
4.web标准（面试重点）：  
-网页中web标准三层组成：结构、表现和行为  
（1）结构：用于对网页元素进行整理和分类，HTML。  
（2）表现：用于设置网页元素的板式、颜色和大小等外观样式，CSS  
（3）行为：网页模型的定义以及交互的编写，JavaScript  
5.W3C：万维网联盟  
  
二：认识HTML  
1.HTML指的是超文本标记语言，用来描述网页。  
2.HTML不是编程语言，是标签语言。  
3.超文本的含义：  
（1）可以加入图片、声音、动画等内容（超越文本）  
（2）可以从一个文件跳转到另一个文件，与世界各地主机的文件相连（超级链接文本）  

三：骨架  
<!-- <!DOCTYPE html>表明使用的html5版本号 -->
<!DOCTYPE html>
<!-- lang="en"表明所使用的html语言类型为english -->
<html lang="en">
    <!-- html为根标签 -->
    <!-- head为文档的头部 -->
<head>
    <!-- charset="UTF-8"：表明html文件以UTF-8编码保存， -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- title写文档的标题 -->
    <title>Document</title>
</head>
<body>
    <!-- body为文档的主体部分 -->
</body>
</html>

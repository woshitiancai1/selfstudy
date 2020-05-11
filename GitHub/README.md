一：基本概念
1.Repository：（仓库）：仓库用来存放项目代码
2.Star（收藏）：仓库主页Star按钮，表示收藏的人数。收藏的项目方便下次查看
3.Fork（复制克隆项目）：用来把别人的仓库复制到自己的github中（在对应的仓库下点击Forked）
4.watch（关注项目）：当对应的项目仓库有更新后，会有提醒

二：注册
官网：github.com
点击 sign up

三：关于项目主页的描述
1.点击主页中的Edit可以修改README.md中的内容
2.Code后面的Issue用来新建issue
3.issues可以用来相互之间交流
4.pull request可以用来实现两个仓库之间的信息同步

四：仓库管理
1.新建文件：create new file
2.commits用来记录项目中提交的次数

五：git命令
1.git add . ：把文件从工作区提交到暂存区
2.git status ：用来查看状态
3.git commit -m ''：把文件从暂存区提交到github仓库
4.最后再git push

5.git config --global user.name 'woshitiancai1'
  git config --global user.email '2590919679@qq.com'
  该设置在github仓库主页显示谁提交了该文件
6.初始化仓库：
（1）mkdir test:新建文件夹，touch test.txt可以创建文件
（2）初始化仓库：cd test，git init：会生成一个隐藏文件，存储本地仓库的信息
7.修改文件：
（1）ls：用来查看仓库中的所有的文件
（2）vi test：用来修改文件
（3）cat test：查看文件中的内容
（4）运用命令继续提交文件，git add，git commit，git push
8.删除仓库文件：
（1）可以在github仓库中直接删除
（2）rm -rf test：删除文件
（3）git rm test：继续提交文件，然后git commit，git push
9.git克隆操作的目的：
将远程仓库复制到本地：git clone 'http:...',

六：Github介绍：
1.什么是github：github是全球最大的社交编程以及代码托管网站
github可以托管各种git库，并提供一个web界面
2.github和git的关系：git是版本控制软件，github是项目代码托管的平台
借助git来管理项目代码
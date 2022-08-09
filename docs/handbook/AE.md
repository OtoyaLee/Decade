# AE


# 腾讯地图Logo动效(指南针)

## 1. 双击项目面板，导入从 Illustrator 做好的腾讯地图Logo项目文件，导入类型 > 合成 | 素材尺寸 > 图层大小 ，确定导入
::: warning 合成时间
本案例 2S 即可
:::
### ![Pic1](https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/20220421141711.png)
### 1). 双击打开合成
### ![Pic1](https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/20220421141736.png)
### 2). 再图层面板使用快捷键 <kbd>Ctrl</kbd>+<kbd>A</kbd> ,选中所有图层，在任意图层上单击 <kbd>鼠标右键</kbd> ,选择 创建 > 从矢量图层创建图形
### ![Pic1](https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/20220421142554.png)
### 得到
### ![Pic1](https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/20220421142654.png)
::: tip AI项目导入AE
进行转化操作后，之后便可正常对图层进行编辑
:::
## 2. 按住其中一个指针的父级链接器，拖动至另一个指针图层
### ![Pic1](https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/20220421143209.png)
::: tip 父级链接器
设置图层父级后，子级会随着父级进行各种变化，但是子级的变化不会影响到父级
:::
### 1). 按下菜单栏中的锚点工具，调整锚点至指南针中心位置
### ![Pic1](https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/20220421144501.png)
### ![Pic1](https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/20220421144544.png)
### 2). 在图层面板下，选中作为父级的指针图层，按下快捷键 <kbd>R</kbd> ,调处旋转关键帧
### ![Pic1](https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/20220421143857.png)
### 3). 从 0 帧开始，间隔 10 帧按下一次秒表，记录关键帧位置，并在每次按下关键帧后，调整旋转角度,每次80°左右
### ![Pic1](https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/20220421144152.png)
### ![Pic1](https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/20220421144941.png)
## 3. 保存


# 腾讯地图Logo动效(背景图例)



## 1. 按住 <kbd>Ctrl</kbd> 在图层面板选中背景的蓝色、绿色、灰色图层,按下快捷键 <kdb>P</kdb> ，调出位置关键帧,接着开启图层面板的 3D 图层功能
### ![Pic1](https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/20220421153634.png)
### 从 0 帧开始，每隔 10 帧按下一次时间秒表，并在每次按下关键帧后调整 Z 轴位置，表现从右往左进入画面的效果
### ![Pic1](https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/20220421153829.png)
### Z轴变化: -472 > -325 > -146 > 0
## 2. 在背景即将完全归位前，再次全选三个背景色块图层，并按下快捷键 <kbd>R</kbd> ,调出旋转关键帧
### 从 1秒5 帧处开始，之后每间隔 5 帧按下一次 Y 轴前的秒表，并在每次按下关键帧后调整 Y 轴旋转角度，表现背景进入画面后，进行一次小幅度回弹，使画面更有动感
### ![Pic1](https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/20220421152902.png)
### Y轴旋转: 13 > 7 > -12 > -6 > 0

## 3. 保存
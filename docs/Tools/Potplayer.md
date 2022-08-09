# Potplayer

::: tip 简介
支持市面上大多数音视频文件格式的一个播放器，顺便还附加了“亿”点小功能.
以下简短介绍下几个个人常用小功能
:::

### 实现Gif的录制

  1. 启动Potplayer,之后按下快捷键
  ![Pic1](https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/po1.png)
   <kbd>Alt</kbd>+<kbd>C</kbd>  开启录制选框
并进行如下设置

|  选项  |  建议值  |
|  ----  |  ---- |
|保存设置|导出路径|
|文件格式|  GIF  |
|  速度  |  2倍速|
|<font color=339933 size=3>图像质量</font>|1000kbps|
|<font color=339933 size=3>图像尺寸</font>|640*480|
|<font color=339933 size=3>帧率</font>|10     |
|声音相关参数|默认|
![Pic1](https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/po2.png)|参考图示|



::: warning 注意 本案例仅以gif导出为例
主要影响gif输出体积的三个影响值为
<font color=#339933 size=3>图像质量</font> 即 (码率).码率越大，即单位时间取样率越大，导出的gif越接近原画;另一个影响因素是<font color=#339933 size=3>帧率</font> 正如你所看到的，帧率越高，导出的gif越丝滑.还有<font color=339933 size=3>图像尺寸</font> 即 (分辨率),一般以 <font color=#0099ff size=4 face="黑体">水平</font>*<font color=#0099ff size=4 face="黑体">竖直</font> 表示，其与体积亦成正比
:::

  2. 按下 <kbd>开始</kbd> 开启录制选框
  录制
  ![Pic1](https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/po3.png)
  3. 双击视频播放窗口，播放视频.视频播放完毕后会自动停止
  4. 待视频播放完毕后，按下 <kbd>停止</kbd> 结束录制
  ![Pic1](https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/po4.png)
  5. <kbd>打开存档文件夹</kbd>找到导出的gif图片完成操作
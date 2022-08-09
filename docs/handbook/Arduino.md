# Arduino

::: warning 温馨提示
如需在仿真软件中使用,请在CV大法时手动注释头文件
:::

### 在Arduino Uno板上实现按键控制led亮灭

   * 本实验用具
   	1. Arduino Uno开发板一件
   	2. 面包板一张
   	3. 四角按键一个
   	4. 电阻两个(200Ω)
   	5. 导线若干

* 按一次四角按键开关，Led亮灯，再按一次按键，Led即灭
    1. 本实验默认以Led接入模拟信号11针脚，按键接入2号针脚
    	> Arduino Uno开发板内置上拉电阻，可随时调用

    ``` cpp {5}
    	#include<Arduino.h>
    	boolean buttonstate = true;//按压按键的状态，默认按下
		boolean ledstate = false;//led状态，默认关闭
		void setup()
		{
  			pinMode(2,INPUT_PULLUP);//INPUT_PULLUP输入上拉电阻(提高电平，使电路稳定)
  			pinMode(11,OUTPUT);
		}

		void loop()
		{
  		while(digitalRead(2) == HIGH){}//循环条件: 读取检测2号针脚是否有高电平
    		if(ledstate == true){//如果灯的状态是亮的
      			digitalWrite(11,LOW);//关灯
      			ledstate=!ledstate;//保持灯的状态
    		} else{
      			digitalWrite(11,HIGH);//开灯
      			ledstate=!ledstate;//保持灯的状态
    		}
  			delay(500);//使灯逐渐亮灭
		}
    ```
    2.附上[Tinkercad](https://www.tinkercad.com/dashboard)仿真的电路图
    ![Pic1](https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/20220313223815.png)

* 长按四角按键开关，Led亮，松开按键，即灭
	1. 本实验默认以Led接入模拟信号11针脚，按键接入2号针脚
		> 本实验外接下拉电阻
		

	``` cpp {9,10}
		#include<Arduino.h>
		boolean buttonstate =0;//按压按键的状态
		void setup()
		{
  			pinMode(11,OUTPUT);
  			pinMode(2,INPUT);
		}
		void loop()
		{
  			buttonstate = digitalRead(2);//读取2号针脚电平，即监视按钮通断
  		if (buttonstate ==HIGH) {//判断是否有高电平
    		digitalWrite(11,HIGH);//Led亮
  		} else {
    		digitalWrite(11,LOW);//Led灭
  		}
		}

	```

	2. 附上[Tinkercad](https://www.tinkercad.com/dashboard)仿真的电路图
		![Pic1](https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/20220313223100.png)



### 在Arduino Uno板上实现抢答器(威力加强版)

   * 本实验用具
   	1. Arduino Uno开发板一块
   	2. 面包板一张
   	3. LED灯三个
   	4. 200Ω电阻3个，10KΩ电阻3个
   	5. 四角按键三个

* 实现一个人率先按下按键抢答后闪烁其面前的LED，之后按下按键的人面前的LED灯不会再闪烁

	1. 本实验默认8,9,10针脚接入LED灯，5,6,7针脚接入四角按键
		> 本实验应设置一个变量，来实现控制————有且只有一个LED灯亮



	 ``` cpp {1,11,23,}
		#include<Arduino.h> //在各大仿真软件中使用请忽略此行 
		// 为LED与按键分配输入输出口
		int redled=10;
		int greenled=9;
		int blueled=8;
		int redpin=7;
		int greenpin=6;
		int bluepin=5;
		int red;
		int green;
		int blue;
		boolean ExCtrl=false;
		void setup()//初始化
		{
		    pinMode(redpin,INPUT);
		    pinMode(greenpin,INPUT);
		    pinMode(bluepin,INPUT);
		    pinMode(redled,OUTPUT);
		    pinMode(greenled,OUTPUT);
		    pinMode(blueled,OUTPUT);
		}
		void loop()
		{
		    if(red==HIGH || green==HIGH || blue==HIGH){
		        ExCtrl=true;
		    }// " || " ————逻辑"或",三条逻辑语句都为假，则假；只有有一真则为真
		    // 在本案例中，只要红绿蓝三个LED灯中只要有一个亮，即有一个灯"绑定"的按键中有高电平，则认为改语句成立
		    if(ExCtrl){
		        return;
		    }//一旦该语句成立，立马退出函数
		    // 读取三个连接按钮的串口是否有高电平，并将获取到的值赋予中间变量"red""green""blue"
		    red=digitalRead(redpin);
		    green=digitalRead(greenpin);
		    blue=digitalRead(bluepin);
		    // 从中间变量取出之前存储的值，并作是否亮灯的判断
		    if(red==HIGH){
		        digitalWrite(redled,HIGH);
		    }
		    else if(green==HIGH){
		        digitalWrite(greenled,HIGH);
		    }
		    else if(blue==HIGH){
		        digitalWrite(blueled,HIGH);
		    }
		}
	 ```


	2. 附上[Tinkercad](https://www.tinkercad.com/dashboard)仿真的电路图
	![Pic1](https://cdn.jsdelivr.net/gh/OtoyaLee/imgpicgo/20220320151515.png)
# PHP

::: tip 俺的图图呢？

~~欢迎来到没图你说个 ** 系列~~

图会有的，就在不久后

:::

## 环境搭建

>## Apache和PHP软件的安装

::: tip 版本

apache V2.4 , php V7.4.30

:::

## Apache部分
>### 1.进入 /conf/httpd.conf,在配置文件中修改apache根目录（自行），配置域名
    Define SRVROOT "D:/Otimeum_Project/web/Apache24"

    ServerName www.example.com:80

>### 2.安装apache为系统服务
##### ~~在 /bin目录打开终端,输入 sudo httpd -k install -n Apache2.4~~
####   在 /bin目录以管理员身份打开终端，输入
    httpd -k install -n Apache2.4

>### 3.运行apache
#### 运行 ApacheMonitor.exe ，在任务栏左击选择刚才安装并命名为 Apache2.4 的apache服务, "start" 开始运行

## PHP部分
>### 1.在php根目录找到 "php.ini-development",改为 "php.ini" ，修在配置文件中修改php根目录（自行）
    extension_dir = "D:/Otimeum_Project/web/php7.4.30/ext"

>### 2.在apache中加载php配置项
#### php在apache中是以模块的形式加载的。因而,在 /conf/httpd.conf 中引入php里的 apache2.4 的模块。在
 ## #LoadModule foo_module modules/mod_foo.so  
#### 之后写入

    LoadModule php7_module "D:/Otimeum_Project/web/php7.4.30/php7apache2_4.dll"
    <FilesMatch "\.php$">
    setHandler application/x-httpd-php
    </FilesMatch>
    PHPINiDir "D:/Otimeum_Project/web/php7.4.30"
    LoadFile "D:/Otimeum_Project/web/php7.4.30/libssh2.dll"

>### 3.将 Index.php 添加为默认索引
#### 在 /conf/httpd.conf中修改 DirectoryIndex 项
    <IfModule dir_module>
        DirectoryIndex index.html index.php
    </IfModule>

>### 4.修改apache默认站点
#### apache默认站点位于 /htdocs
#### 1.在 /conf/httpd.conf 进行修改
    ##  DocumentRoot "${SRVROOT}/htdocs"
    ## <Directory "${SRVROOT}/htdocs">
#### 更改 ${SRVROOT}/htdocs 为自定义目录（自行）
    DocumentRoot "D:/Otimeum_Project/web/out"
    <Directory "D:/Otimeum_Project/web/out">
#### 2.在 /conf/extra/httpd-vhosts.conf 进行修改（自行）
    <VirtualHost *:80>
    ServerAdmin webmaster@dummy-host.example.com
    DocumentRoot "D:/Otimeum_Project/web/out"
    ServerName dummy-host.example.com
    ServerAlias www.dummy-host.example.com
    ErrorLog "logs/dummy-host.example.com-error.log"
    CustomLog "logs/dummy-host.example.com-access.log" common
</VirtualHost>


>### 5.重启apache服务
#### 任务栏 >  左击 Apache2.4 > restart
#### 进入 D:/Otimeum_Project/web/out ，编写 test.php
    <?php echo "hello,world"; ?>
#### 打开浏览器，键入 http://localhost/test.php
#### 好了，你已经掌握php的搭建了，接下来就写一个WordPresss主题吧(受虐滑稽.jpg




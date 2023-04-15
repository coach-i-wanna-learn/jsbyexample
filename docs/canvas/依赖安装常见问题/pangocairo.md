│ Package pangocairo was not found in the pkg-config search path.

这个错误通常是由于缺少pangocairo开发包导致的。pangocairo是一个用于渲染文本的软件库，许多应用程序和库需要它来编译和链接。

要解决这个错误，您需要在系统上安装pangocairo开发包。具体操作方式取决于您使用的操作系统和包管理器。

以下是在一些常见的操作系统上安装pangocairo开发包的命令：

Debian/Ubuntu：

sudo apt-get install libpango1.0-dev
````

CentOS/Fedora/RHEL：

sudo yum install pango-devel
````

macOS：

brew install pango
````

Windows：

Windows上没有官方的pangocairo二进制文件，但是您可以通过安装MSYS2来获取它。您可以在以下链接中下载并安装MSYS2：

https://www.msys2.org/

安装完成后，打开MSYS2终端并执行以下命令来安装pangocairo：

pacman -S mingw-w64-x86_64-pango
````
安装完成后，重新运行您的命令以查看是否仍然出现Package pangocairo was not found错误。

请注意，如果您在使用其他包管理器或操作系统，请参阅其文档以获取有关如何安装pangocairo开发包的说明。
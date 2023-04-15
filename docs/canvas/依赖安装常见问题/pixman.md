│ Package pixman-1 was not found in the pkg-config search path.

这个错误通常是由于缺少pixman-1开发包导致的。pixman是一个用于图像处理的软件库，许多应用程序和库需要它来编译和链接。

要解决这个错误，您需要在系统上安装pixman-1开发包。具体操作方式取决于您使用的操作系统和包管理器。

以下是在一些常见的操作系统上安装pixman-1开发包的命令：

Debian/Ubuntu：

sudo apt-get install libpixman-1-dev
```

CentOS/Fedora/RHEL：

sudo yum install pixman-devel
macOS：

brew install pixman
Windows：

Windows上没有官方的pixman-1二进制文件，但是您可以通过安装MSYS2来获取它。您可以在以下链接中下载并安装MSYS2：

https://www.msys2.org/

安装完成后，打开MSYS2终端并执行以下命令来安装pixman-1：

pacman -S mingw-w64-x86_64-pixman
安装完成后，重新运行您的命令以查看是否仍然出现Package pixman-1 was not found错误。

请注意，如果您在使用其他包管理器或操作系统，请参阅其文档以获取有关如何安装pixman-1开发包的说明。
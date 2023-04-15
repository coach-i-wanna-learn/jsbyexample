
/bin/sh: pkg-config: command not found

这个错误通常是由于缺少pkg-config命令导致的。pkg-config是一个用于检查库依赖关系并提供编译选项的命令行工具。

要解决这个错误，您需要在系统上安装pkg-config。具体操作方式取决于您使用的操作系统和包管理器。

以下是在一些常见的操作系统上安装pkg-config的命令：

Debian/Ubuntu：

sudo apt-get install pkg-config
```

CentOS/Fedora/RHEL：

sudo yum install pkgconfig
```

macOS：

brew install pkg-config
```

Windows：

Windows上没有官方的pkg-config二进制文件，但是您可以通过安装MSYS2来获取它。您可以在以下链接中下载并安装MSYS2：

https://www.msys2.org/

安装完成后，打开MSYS2终端并执行以下命令来安装pkg-config：

pacman -S mingw-w64-x86_64-pkg-config
```
安装完成后，重新运行您的命令以查看是否仍然出现pkg-config: command not found错误。

请注意，如果您在使用其他包管理器或操作系统，请参阅其文档以获取有关如何安装pkg-config的说明。


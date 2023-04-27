
在安装Node Sass之前，您需要确保您的系统满足以下先决条件：

Node.js：Node Sass是一个Node.js模块，因此您需要安装Node.js。建议使用最新版本的Node.js。

npm：Node Sass是通过npm包管理器进行分发的，因此您需要安装npm。npm通常随Node.js一起安装。

C++编译器：Node Sass是使用C++编写的，因此您需要安装C++编译器。在大多数Linux发行版上，可以使用以下命令安装：

Debian/Ubuntu：

sudo apt-get install build-essential
CentOS/Fedora/RHEL：

sudo yum install gcc-c++ make
macOS：

在macOS上，您需要安装Xcode命令行工具。您可以通过运行以下命令来安装它们：

xcode-select --install
Windows：

在Windows上，您需要安装Microsoft Visual Studio C++ Build Tools。您可以在以下链接中下载并安装它们：

https://visualstudio.microsoft.com/visual-cpp-build-tools/

Python 2.7：Node Sass需要Python 2.7环境来编译。在大多数Linux发行版上，Python 2.7通常已经预安装了。在macOS和Windows上，您需要从Python官方网站下载并安装Python 2.7版本。

请注意，这些先决条件对于安装Node Sass是必需的，如果其中任何一个条件未满足，则无法正常安装Node Sass。


git rebase -i --root

清空所有 commit

创建一个新的 repo

1. 创建文件夹
2. 如果需要安装依赖，在 `pnpm-workspace.yaml` 更新 workspace 的规则
3. cd 到第一步创建的文件夹，执行 `pnpm init`
4. `pnpm i xx` 安装依赖
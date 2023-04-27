## 使用 vite 创建一个最简单的项目

好的，下面是使用 Vite 创建一个最简单的项目的步骤：

1.  首先，确保你已经安装了 Node.js 和 npm。可以在终端中运行以下命令检查：
    
    
    ````shell
    node -v
    npm -v
    ```
    
    如果没有安装，可以在 Node.js 的官网上下载安装包：https://nodejs.org。
    
    ````
    
2.  打开终端，进入你想要创建项目的目录，然后运行以下命令：
    
    
    ````shell
    npm init vite-app my-project
    cd my-project
    npm install
    ```
    
    这里我们使用了 Vite 官方提供的命令行工具 `npm init vite-app` 来创建项目。`my-project` 是你想要创建的项目名称。在项目创建完成后，我们进入项目目录并执行 `npm install` 命令来安装项目依赖。
    
    ````
    
3.  安装完成后，我们可以运行以下命令启动项目：
    
    
    ````shell
    npm run dev
    ```
    
    运行成功后，Vite 将会在 http://localhost:3000 启动一个开发服务器，并且自动打开浏览器展示你的项目。
    ````
    

现在来解释一下各个配置的作用：

-   `name`：项目名称。
-   `type`：项目类型，这里是 `module`。这个选项告诉 Node.js 在处理模块时使用 ECMAScript 模块规范。
-   `version`：项目版本号。
-   `description`：项目描述。
-   `entrypoint`：项目的入口文件，这个选项告诉 Node.js 从哪个文件开始解析代码。
-   `repository`：项目的代码仓库地址。
-   `keywords`：关键词，用于搜索和分类。
-   `author`：作者信息。
-   `license`：项目的开源协议。
-   `scripts`：自定义的命令脚本。例如，`npm run dev` 就是用来启动开发服务器的脚本。
-   `dependencies`：项目的依赖项。Vite 本身就是一个依赖项，它会自动安装到项目中。
-   `devDependencies`：开发时使用的依赖项。例如，`eslint` 和 `prettier` 等代码质量工具就属于开发时使用的依赖项。
-   `browserslist`：项目支持的浏览器列表，用于自动添加浏览器前缀和打包时选择合适的 polyfill。

除了 package.json 文件中的配置，Vite 还提供了一些额外的配置选项，可以在项目根目录下创建 `vite.config.js` 文件来配置这些选项。例如：



```js
module.exports = {
  // 配置开发服务器
  server: {
    port: 8080, // 指定服务器端口号
    open: true // 自动打开浏览器
  },
  // 配置构建输出
  build: {
    outDir: 'dist', // 指定输出目录
    sourcemap: true // 生成 source map 文件
  }
}
```

这里的 `server` 和 `build` 都是 Vite 的配置选项，用来配置开发服务器和构建输出相关的参数。
dist & dist1 分别为 initial 代码打包为 single bundle 和 initial 代码 splitChunks 的例子

可以打开浏览器使用 performance profile 一下，看看 compile code 花费的时间

这里的结论是 single bundle 在 code caching 的情况下，ttu 跟短


https://v8.dev/blog/code-caching-for-devs#merge
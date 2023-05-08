## pragma 和 pragmaFrag 的作用是什么

在 Babel 中，`pragma` 和 `pragmaFrag` 都是 `@babel/preset-react` 预设中的选项，用于配置 React 的 JSX 语法转换。它们的作用如下：

- `pragma`: 指定用于替换 JSX 元素的函数名称。默认情况下，Babel 会将 JSX 语法转换为 `React.createElement` 函数调用形式，但是有些情况下可能希望使用其他的函数名称，例如 Preact 中的 `h` 函数。通过设置 `pragma` 选项，可以让 Babel 将 JSX 转换为指定的函数调用形式。
- `pragmaFrag`: 指定用于替换 JSX 片段的函数名称。默认情况下，Babel 会将 JSX 片段转换为 `React.Fragment`，但是在某些情况下可能希望使用其他的函数名称，例如 Preact 中的 `Fragment`。通过设置 `pragmaFrag` 选项，可以让 Babel 将 JSX 片段转换为指定的函数调用形式。

在提供自定义的 `createElement` 和 `Fragment` 实现时也可用，例如实现一个名为 `__createElement` 的函数用于替换 `React.createElement`，以及一个名为 `DomFrag` 的函数用于替换 `React.Fragment`。

参考链接：

- Babel 官网关于 `@babel/preset-react` 预设的文档：https://babeljs.io/docs/en/babel-preset-react
- React 官方文档关于 JSX 的文档：https://reactjs.org/docs/introducing-jsx.html
在 React 中，可以使用 `createContext` 方法来创建一个 Context 对象。Context 对象允许在组件树中共享某些数据，而不需要一级一级地手动传递 props。

使用 `createContext` 方法创建的 Context 对象包含两个属性：`Provider` 和 `Consumer`。其中，`Provider` 负责提供共享的数据，`Consumer` 负责读取共享的数据。

具体使用方法如下：

1.  使用 `React.createContext(defaultValue)` 方法创建一个 Context 对象，并设置初始值 defaultValue

```javascript
import React from 'react';
const MyContext = React.createContext(defaultValue);

```

2.  在需要共享数据的组件中，使用 `MyContext.Provider` 来提供共享的数据

```javascript
<MyContext.Provider value={/* 共享的数据 */}>
  // 这里是子组件
</MyContext.Provider>

```

3.  在需要访问共享数据的组件中，使用 `MyContext.Consumer` 来访问共享的数据

```javascript<MyContext.Consumer>
  {value => /* 访问共享的数据 */}
</MyContext.Consumer>

```

另外，还可以使用 `useContext` 来访问 `Context` 提供的共享数据，示例代码如下：

```javascript
import React, { useContext } from 'react';
const value = useContext(MyContext);

```

这里，`useContext` 方法通过传入 `MyContext` 获取共享的数据。

参考资料：

\[[2](https://react.dev/docs/context.html#reactcreatecontext)\] \[[1](https://www.linkedin.com/pulse/react-native-hooks-munem-habib)\]


## createContext 中的 defaultValue 和 Provider 中的 value 的区别是什么

`createContext` 方法创建的 Context 对象包含了两个属性：`Provider` 和 `Consumer`。其中，`Provider` 组件用来提供共享的数据，`Consumer` 组件用来消费共享的数据。

`defaultValue` 是在创建 Context 对象时，作为参数传入的默认值。当某个组件没有匹配到上层的 `Provider` 时，它就会使用这个默认值作为自己的值，而不会抛出异常。

而 `value` 则是在上层组件中使用 `Provider` 提供给下层组件的共享数据。当某个组件匹配到上层的 `Provider` 时，它就会使用 `Provider` 提供的 `value` 作为自己的值。

可以看出，`defaultValue` 是只在没有匹配到上层 `Provider` 时才会被使用的默认值，而 `value` 则是由 `Provider` 显式提供给下层组件的共享数据。

需要注意的是，如果使用了 `defaultValue`，那么在任何情况下都会使用它作为初始值，而不是抛出异常。而如果没有使用 `defaultValue`，并且没有匹配到上层 `Provider`，那么将会抛出异常。

参考资料：

\[[1](https://react.dev/reference/react/createContext)\] \[[2](https://zh-hans.reactjs.org/docs/context.html#reactcreatecontext)\]
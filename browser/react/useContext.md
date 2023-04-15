react useContext 如何使用

`useContext` 是 React 提供的一个 Hook，它可以让你在组件之间共享数据，而不需要通过 props 层层传递。

使用 `useContext` 需要以下几个步骤：

1.  创建一个 Context 对象

使用 `createContext` 函数来创建一个 Context 对象，它将成为共享数据的容器。该函数接受一个初始值作为参数。

```jsx
const MyContext = React.createContext(initialValue);
```

2.  在需要共享数据的组件中使用 Context.Provider

使用 `MyContext.Provider` 组件在组件树中提供共享数据。将需要共享数据的组件作为 `Provider` 的子组件，并将共享数据作为 `value` 属性传递给 `Provider`。

```jsx
<MyContext.Provider value={sharedValue}>
  <MyComponent />
</MyContext.Provider>
```

3.  在接收共享数据的组件中使用 useContext

使用 `useContext` Hook 来接收共享数据。`useContext` 接收一个 Context 对象作为参数，返回该 Context 的当前值。

```jsx
const sharedValue = useContext(MyContext);
```

下面是一个简单的例子，演示如何使用 `useContext` 在组件之间共享主题颜色：

```jsx
import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext('light');

function App() {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Header />
      <Main />
    </ThemeContext.Provider>
  );
}

function Header() {
  const theme = useContext(ThemeContext);
  return (
    <header style={{ backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
      <h1>Header</h1>
    </header>
  );
}

function Main() {
  const theme = useContext(ThemeContext);
  return (
    <main style={{ backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
      <h2>Main</h2>
      <p>Some content...</p>
    </main>
  );
}

export default App;
```

在这个例子中，`ThemeContext` 是一个容器，用于存储主题的值。`App` 组件使用 `ThemeContext.Provider` 来提供主题值，并将 `Header` 和 `Main` 组件作为子组件传递给 `Provider`。`Header` 和 `Main` 组件使用 `useContext` Hook 来接收主题值，并使用该值来设置自己的样式。`toggleTheme` 函数在点击按钮时切换主题的值，并触发组件重新渲染。
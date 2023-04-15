React 的 useEffect Hook 可以让你在函数式组件中执行副作用操作，例如订阅事件、更新 DOM 和发起网络请求等。

useEffect 接受一个函数和一个可选数组作为参数。函数参数是要在组件渲染时执行的函数，可以执行任何副作用操作。数组参数是可选的，可以传递一个或多个变量，用于控制 useEffect 的条件执行。

下面是一个使用 useEffect 的示例：

```js
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // 副作用函数，每次 count 发生变化时，打印 count 的值
  useEffect(() => {
    console.log(`count is ${count}`);
  }, [count]);

  // 点击按钮，改变 count 的值
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```

在这个示例中，每次点击按钮时，count 的值会增加，并且 useEffect 中的副作用函数会被执行，打印当前的 count 值。

在 useEffect 的第二个参数中，我们传递了一个数组 \[count\]，表示只有当 count 发生变化时才执行副作用函数。如果将此数组省略，则副作用函数将在每次组件渲染时都执行。

需要注意的是，副作用函数可能会返回一个清理函数，用于清理在组件卸载时需要清理的副作用操作。例如，你可以在 useEffect 中订阅一个事件，并在返回的清理函数中取消订阅，以避免内存泄漏。
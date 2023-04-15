useState 如何使用

在 React 函数组件中使用 `useState`，需要先从 React 模块中导入它：

```
import React, { useState } from 'react';
```

然后，可以在函数组件的内部调用 `useState` 函数来声明一个状态变量和一个更新该变量的函数。`useState` 接收一个初始状态值作为参数，返回一个由当前状态值和更新状态值的函数组成的数组。可以使用数组解构来获取这些值：

```
const [state, setState] = useState(initialState);
```

其中，`state` 是当前状态值，`setState` 是更新状态值的函数。`initialState` 是状态的初始值，可以是任何 JavaScript 数据类型。

下面是一个简单的例子，说明如何使用 `useState` 追踪按钮被点击的次数：

```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked the button {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```

在这个例子中，`useState` 的初始值为 `0`，所以 `count` 初始化为 `0`。每次按钮被点击，`handleClick` 函数会被调用，使用 `setCount` 函数更新 `count` 的值，从而触发组件重新渲染，并将新的 `count` 值显示在页面上。
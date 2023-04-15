useRef 如何使用

`useRef` 是 React 提供的一个 Hook，它可以用来创建一个可变的引用，类似于类组件中的 `this`。`useRef` 返回一个包含 `current` 属性的对象，该属性指向传递给 `useRef` 的初始值。与 `useState` 不同，`useRef` 返回的对象可以在更新时保持不变。

`useRef` 的主要用途之一是获取 DOM 元素的引用。在函数组件中，无法像类组件中那样使用 `this.refs` 来获取 DOM 元素的引用。但是，可以使用 `useRef` 来创建一个引用，然后将其传递给要引用的 DOM 元素。

下面是一个简单的例子，演示如何使用 `useRef` 来获取输入框中的值：

```js
import React, { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  function handleButtonClick() {
    alert(inputRef.current.value);
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
}
```

在这个例子中，`useRef` 返回一个对象 `{ current: null }`。将这个对象传递给输入框的 `ref` 属性将其与输入框关联。在 `handleButtonClick` 函数中，可以使用 `inputRef.current.value` 来获取输入框中的值。

除了用于获取 DOM 元素的引用，`useRef` 还可以用于存储任何可变的值，类似于类组件中的实例变量。在函数组件中，每次重新渲染都会创建新的局部变量，而 `useRef` 创建的变量可以在组件重新渲染时保持不变。
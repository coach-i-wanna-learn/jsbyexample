`useLayoutEffect` 是 React 的一个 Hook，它类似于 `useEffect`，但是会在 DOM 更新之前同步执行。

`useLayoutEffect` 的语法和 `useEffect` 的语法非常相似，只是 `useLayoutEffect` 中的回调函数会在 DOM 更新之前同步执行，而 `useEffect` 中的回调函数会在 DOM 更新之后异步执行。

下面是一个使用 `useLayoutEffect` 的例子，它会在组件挂载时测量一个 DOM 元素的高度，并将其保存在状态中：



```jsx
import { useState, useLayoutEffect, useRef } from 'react';

function Example() {
  const [height, setHeight] = useState(0);
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    if (elementRef.current) {
      setHeight(elementRef.current.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div ref={elementRef}>
      <p>The height of this element is {height}px</p>
    </div>
  );
}
```

在这个例子中，我们在 `useLayoutEffect` 的回调函数中测量了一个 DOM 元素的高度，并将其保存在状态中。由于 `useLayoutEffect` 的回调函数会在 DOM 更新之前同步执行，因此我们可以在组件渲染之前获取到准确的高度值。
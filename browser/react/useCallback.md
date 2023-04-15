`useCallback` 是 React 中提供的一个 Hook，它用于缓存回调函数。具体来说，当有组件在渲染时需要传递一个函数给子组件时，若父组件重新渲染，那么传递给子组件的函数也会重新创建，这样可能会影响性能。而使用 `useCallback` 可以将这个回调函数进行优化，只有在依赖项发生变化时才重新创建。

`useCallback` 通常用于优化子组件的性能，和 `useMemo` 类似，都是通过缓存值来避免不必要的计算或渲染。

下面是 `useCallback` 的语法示例：

```javascript
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);

```

这里，第一个参数是需要进行缓存的回调函数，第二个参数是一个数组，包含了所有的依赖项。只有当依赖项改变时，才会重新创建缓存的回调函数。

需要注意的是，由于 `useCallback` 返回的是一个 memoized 函数，所以它只能用来缓存函数类型的值，不能用来缓存其他类型的值。

参考资料：

\[[1](https://reactjs.org/docs/hooks-reference.html#usecallback)\] \[[2](https://www.w3schools.com/react/react_usecallback.asp)\]



因为没有 class 实例，所以没有地方保存函数，function 每次会重新渲染，所以需要使用 useCallback 模拟一下 this 的行为
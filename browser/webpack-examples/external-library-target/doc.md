
## webpack 配置
```js
{
  output: {
    libraryTarget: 'commonjs',
    library: 'myLibrary'
  }
}

```
## umd

```js
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.myLibrary = factory();
  }
}(typeof self !== 'undefined' ? self : this, function() {
  return {
    myFunction: function() {
      // ...
    }
  };
}));
```
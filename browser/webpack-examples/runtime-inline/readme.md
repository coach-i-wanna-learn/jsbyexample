
runtime 代码中包含 bundle js 文件的信息，如果 bundle js 带了 hash，那么 runtime 会发生变化。如果 runtime 没有 extract, 那么 entry 的 bundle 会经常变化

如
```javascript
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + "a" + "." + "69d04c20b57074fbddec" + ".js";
/******/ 		};
/******/ 	})();
```
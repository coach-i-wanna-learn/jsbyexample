/**
 * 这个函数有两个 yield， 需要三个 next， 才能变成 done 的状态
 */
function* generator() {
  /* next 1 start*/
  console.log('generator start')
  const af = function af () {
    console.log('af')
    return '1'
  }
  const a /* next 2 start，同时 next 传入的参数赋值给 a */= /* 执行了第一个 next 的时候，程序在这里停止 */ /* next 1 end */ yield af();
  console.log('a', a)
  const b /* next 3 start，同时 next 传入的参数赋值给 b */ = /* next 2 end */ yield 2;
  console.log('b', b)
  return 3 /* next 3 end */
}
const it = generator()
console.log('start')

console.log('next 1 before')

var ii = it.next()
console.log(ii.value, '====')
console.log('next 1 after')

console.log('next 2 before')

ii = it.next(1)
console.log('next 2 after', ii)

ii = it.next(2)

console.log('next 3 after', ii)


for (const iterator of it) {
  console.log(iterator, 'iterator')
}

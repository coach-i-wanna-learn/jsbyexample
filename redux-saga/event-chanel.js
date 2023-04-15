import { take, put, call, cancelled, takeEvery, delay, cancel } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import createSagaMiddleware from 'redux-saga'

import { createStore, applyMiddleware } from 'redux'

// creates an event Channel from an interval of seconds
function countdown(secs) {
  return eventChannel(emitter => {
      const iv = setInterval(() => {
        secs -= 1
        if (secs > 0) {
          emitter(secs)
        } else {
          // this causes the channel to close
          emitter(END)
        }
      }, 1000);
      // The subscriber must return an unsubscribe function
      // this will be invoked when the saga calls `channel.close` method
      return () => {
        clearInterval(iv)
      }
    }
  )
}

export function* saga() {
  const chan = yield call(countdown, 5)
  try {
    while (true) {
      // take(END) will cause the saga to terminate by jumping to the finally block
      let seconds = yield take(chan)
      console.log(`countdown: ${seconds}`)
    }
  } finally {
    console.log('countdown terminated')
  }
}

/*
from me: 
while 出现的原因是程序的执行是有一定顺序的，saga 中有自己的控制流，当我们 saga 太多的时候，我们希望独立一些控制流，这个时候需要用到 while 来保证我们的控制流一直有效（可以减少无效的判断？）

if (yield take(A)) {

}

if (yield take(B)) {
  
}

=> 
借用了Generator，省略了 if 判断？当然我们需要先 fork 一下

while {
  yield take(B)
}


while {
  yield take(A)
}

from chatgpt:
在 Redux Saga 中，while 循环通常用于监听某个条件是否满足，如果不满足就一直等待，直到条件满足为止。与其他编程语言中的 while 循环不同的是，在 Redux Saga 中的 while 循环实际上是一个基于 Generator 函数的无限循环，它使用 yield 关键字来挂起执行并等待某个事件发生，当事件发生时，将其包装成一个 Effect 对象并返回给 Saga Middleware，然后 Saga Middleware 将 Effect 对象交给 Redux Store 处理，从而触发下一步 Action 的派发。
使用 while 循环的典型场景是在监听某个异步操作的执行状态，例如等待某个 API 请求完成后再执行后续操作。在这种情况下，我们通常会使用 take 或者 takeEvery 等 Effect 函数来监听某个动作，当动作被触发时，我们就可以开始进行异步操作，并在 while 循环中等待操作完成的结果。当操作完成后，我们通常会将结果打包成一个新的动作并通过 put 函数将其提交给 Redux Store 进行处理。如果操作失败或者被取消，则可以使用 try/catch 语句块或者 finally 关键字来捕获错误并进行相应的处理。
综上所述，使用 while 循环可以帮助我们在 Redux Saga 中实现复杂的异步流程控制，通过监听某个条件的变化来实现任务的自动化处理，从而提高应用程序的可靠性和稳定性。
*/


// export function* saga() {
//   const chan = yield call(countdown, 5)
//   try {
//     while (true) {
//       // take(END) will cause the saga to terminate by jumping to the finally block
//       let seconds = yield take(chan)
//       console.log(`countdown: ${seconds}`)
//       if (seconds) {
//         yield cancel()
//       }
//     }
//   } finally {
//     if (yield cancelled()) {
//       chan.close()
//       console.log('countdown cancelled')
//     }
//   }
// }

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  () => {},
  applyMiddleware(sagaMiddleware)
)



sagaMiddleware.run(saga)

/*
countdown: 4
countdown: 3
countdown: 2
countdown: 1
countdown terminated



countdown: 4
countdown cancelled
*/
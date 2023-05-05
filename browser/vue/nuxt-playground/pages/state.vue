<script setup> 
import { reactive, ref} from 'vue'

const couter = reactive({count: 0}) // Proxy
const message = ref('hello world') // ref 能够克服 reactive 的缺点，保证了 类似 结构赋值的场景仍然能够保持响应式

// https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#limitations-of-reactive
</script>

<template>
  <h1>{{message}}</h1>
  <!-- 任何有效的 js 表达式 -->
  <p>Count is: {{couter.count}}</p> 
</template>
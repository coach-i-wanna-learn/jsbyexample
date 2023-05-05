<script setup>
  import {ref} from 'vue'

  const text = ref('')

</script>

<template>
<input type="text" v-model="text" placeholder="type here">
<p>{{text}}</p>
</template>

<style>

</style>
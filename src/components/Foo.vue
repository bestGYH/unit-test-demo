<!--
 * @Description:判断一些文本是否被渲染的简单的示例
 * @Author: gaoyanhui
 * @Date: 2022-04-12 11:57:05
 * @LastEditTime: 2022-04-12 14:25:17
 * @LastEditors: maple
-->
<template>
  <div>
    <div class="message">
      {{ message }}
    </div>
    Enter your username: <input v-model="username">
    <div
      v-if="error"
      class="error"
    >
      Please enter a username with at least seven letters.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Foo',

  data () {
    return {
      message: 'Welcome to the Vue.js cookbook',
      username: ''
    }
  },

  computed: {
    error () {
      return this.username.trim().length < 7
    }
  }
}
</script>
<style scoped>
.error{
    color:red;
}
</style>

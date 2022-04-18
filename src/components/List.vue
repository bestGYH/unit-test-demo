<!--
 * @Description:unitTest demo
 * @Author: gaoyanhui
 * @Date: 2022-04-11 15:36:01
 * @LastEditTime: 2022-04-12 14:30:34
 * @LastEditors: maple
-->
<template>
      <div>
        <h1>My To Do List</h1>
         <input v-model="newItem" >
        <button @click="addItemToList" class="add-btn">Add</button>
        <!--displays list -->
        <ul>
          <li v-for="item in listItems" :key="item">{{ item }}</li>
        </ul>
      </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      listItems: ['buy food', 'play games', 'sleep'],
      newItem: ''
    }
  },
  methods: {
    addItemToList () {
      this.listItems.push(this.newItem)
      this.newItem = ''
    }
  }
}
</script>

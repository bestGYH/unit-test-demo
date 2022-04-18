/*
 * @Description:
 * @Author: gaoyanhui
 * @Date: 2022-04-11 15:24:37
 * @LastEditTime: 2022-04-12 14:43:11
 * @LastEditors: maple
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List'
import Foo from '@/components/Foo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/to-do',
      name: 'ToDo',
      component: List
    },
    {
      path: '/foo',
      name: 'Foo',
      component: Foo
    }
  ]
})

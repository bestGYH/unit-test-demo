/*
 * @Description:unitTest list page
 * @Author: gaoyanhui
 * @Date: 2022-04-11 15:42:06
 * @LastEditTime: 2022-04-11 17:18:06
 * @LastEditors: maple
 */
import List from '@/components/List'
import Vue from 'vue'
import chai from 'chai'
let expect = chai.expect

// 测试List.vue文件
describe('List.vue', () => {
  // 'displays items from the list'是对本次测试的描述
  it('displays items from the list', () => {
    // our test goes here
    // build component
    // 可以理解为获取组件，如果你看不太懂的话，照抄就行了
    const Constructor = Vue.extend(List)
    const ListComponent = new Constructor().$mount()
    // assert that component text contains items from the list
    // 下面是指本次测试期望组件中的文本内容包含：'play games'
    expect(ListComponent.$el.textContent).to.contain('play games')
  })
  it('adds a new item to list on click', () => {
    // our test goes here
    const Constructor = Vue.extend(List)
    const ListComponent = new Constructor().$mount()

    // set input value
    // 初始化输入的内容
    ListComponent.newItem = 'brush my teeth'

    // find button
    const button = ListComponent.$el.querySelector('button')
    // simulate click event
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    ListComponent._watcher.run()
    // assert list contains new item
    // 下面是指本次测试期望组件中的节点的文本内容包含：'brush my teeth'
    expect(ListComponent.$el.textContent).to.contain('brush my teeth')
    // 下面是指本次测试期望组件中的data中包含：'brush my teeth'
    expect(ListComponent.listItems).to.contain('brush my teeth')
  })
})

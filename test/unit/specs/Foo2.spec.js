/*
 * @Description:
 * @Author: gaoyanhui
 * @Date: 2022-04-12 14:57:41
 * @LastEditTime: 2022-04-12 14:57:41
 * @LastEditors: maple
 */
import { shallowMount } from '@vue/test-utils'
import Foo from '@/components/Foo'

describe('Foo', () => {
  it('renders a message and responds correctly to user input', async () => {
    const wrapper = shallowMount(Foo, {
      data () {
        return {
          message: 'Hello World',
          username: ''
        }
      }
    })

    // 确认是否渲染了 `message`
    expect(wrapper.find('.message').text()).toEqual('Hello World')

    // 断言渲染了错误信息
    expect(wrapper.find('.error').exists()).toBeTruthy()

    // 更新 `username` 并断言错误信息不再被渲染
    await wrapper.setData({ username: 'Lachlan' })
    expect(wrapper.find('.error').exists()).toBeFalsy()
  })
})
// const factory = (values = {}) => {
//   return shallowMount(Foo, {
//     data () {
//       return {
//         ...values
//       }
//     }
//   })
// }
// describe('Foo', () => {
//   it('renders a welcome message', () => {
//     const wrapper = factory()

//     expect(wrapper.find('.message').text()).toEqual('Welcome to the Vue.js cookbook')
//   })

//   it('renders an error when username is less than 7 characters', () => {
//     const wrapper = factory({ username: '' })

//     expect(wrapper.find('.error').exists()).toBeTruthy()
//   })

//   it('renders an error when username is whitespace', () => {
//     const wrapper = factory({ username: ' '.repeat(7) })

//     expect(wrapper.find('.error').exists()).toBeTruthy()
//   })

//   it('does not render an error when username is 7 characters or more', () => {
//     const wrapper = factory({ username: 'Lachlan' })

//     expect(wrapper.find('.error').exists()).toBeFalsy()
//   })
// })

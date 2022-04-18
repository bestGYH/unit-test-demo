/*
 * @Description:
 * @Author: gaoyanhui
 * @Date: 2022-04-11 17:22:30
 * @LastEditTime: 2022-04-11 17:25:42
 * @LastEditors: maple
 */
const sum = require('../../../src/components/sum')

describe('sum.js', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})

const expect = require('expect')
const { add, square } = require('./utils')

it('should add two numbers', () => {
  let res = add(1, 2)

  if (res !== 3) {
    throw new Error(`Expected 3, but got ${res}`)
  }
})

it('should add two numbers', () => {
  let res = add(1, 2)
  expect(res).toBe(3)
})

it('should square a number', () => {
  let res = square(4)

  if (res !== 16) {
    throw new Error(`Expected 16, but got ${res}`)
  }
})
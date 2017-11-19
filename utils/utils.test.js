const { add } = require('./utils')

it('should add two numbers', () => {
  let result = add(1, 2)

  if (result !== 3) {
    throw new Error(`Expected 3, but got ${result}`)
  }
  
})
# Use with ruleset

```js
// ruleSet must be an Object Array
const ruleSet = [
  {
    name: 'Email', // rule should have a unique name
    // set of rules will be checked in order
    rules: ['required', 'email', 'size:32'],
    // tips are one-to-one of the rules, but you can set only one tip like 'Price'
    tips: ['Required...', 'Not a valid Email', 'Email address too long']
  },
  {
    name: 'Price',
    rules: ['required', 'lt:5000'],
    tips: ['Common Mes: Error occur']
  }
]

const validator = new Validator(ruleSet)
// or
// const validator = new Validator()
// validator.use(ruleSet)

console.log(validator.check('', 'Email'))
// => {isError: true, isPass: false, name: 'Email', tip: 'Required...'}
console.log(validator.check('some@some', 'Email'))
// => {isError: true, isPass: false, name: 'Email', tip: 'Not a valid Email'}
console.log(validator.check('Iamveryloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo@gmail.com', 'Email'))
// => {isError: true, isPass: false, name: 'Email', tip: 'Email address too long'}
console.log(validator.check('hwenleung@gmail.com', 'Email'))
// => {isError: false, isPass: true, name: 'Email'}

// use common error tip
let price
console.log(validator.check(price, 'Price'))
// => {isError: true, isPass: false, name: 'Price', tip: 'Common Mes: Error occur'}
price = 5001
console.log(validator.check(price, 'Price'))
// => {isError: true, isPass: false, name: 'Price', tip: 'Common Mes: Error occur'}
price = 4999
console.log(validator.check(price, 'Price'))
// => {isError: false, isPass: true, name: 'Price'}
```
# Logical operators

you can use preset rules with logical operators.
let's continue with the example of [Register custom rules](/guide/rules.html#register-custom-rules)

```js
validator.test('hwenleung@gmail.com', 'email && contain:gmail.com, qq.com') // => true
validator.test('hwenleung@163.com', 'email && contain:gmail.com, qq.com') // => false
validator.test('hwenleung@qq.com', 'email && contain:gmail.com, qq.com') // => true

validator.test(13, 'lt:20 || gt: 60 && is_prime') // => true
validator.test(23, 'lt:20 || gt: 60 && is_prime') // => false
validator.test(797, 'lt:20 || gt: 60 && is_prime') // => true
validator.test(4, 'lt:20 || (gt: 60 && is_prime)') // => true
validator.test(64, 'lt:20 || (gt: 60 && is_prime)') // => false
validator.test(797, 'lt:20 || (gt: 60 && is_prime)') // => true
validator.test(13, '((lt:20 || gt: 60) && is_prime)') // => true
validator.test(23, '((lt:20 || gt: 60) && is_prime)') // => false
```
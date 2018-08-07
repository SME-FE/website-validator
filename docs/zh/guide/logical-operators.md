# 逻辑运算符

内置的规则可以用逻辑运算符进行连接，从而进行更复杂的判断。
从 [Register custom rules](/guide/rules.html#register-custom-rules) 例子里的代码继续

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
# 规则

## 内置规则

使用前，先引入

```js
import Validator from 'validator-core'
const validator = new Validator()
```

<details>
  <summary>required</summary>

  ```js
  validator.test('', 'required') // => false
  validator.test('x', 'required') // => true
  ```

</details>
<details>
  <summary>email</summary>

  ```js
  validator.test('test@gmail.com', 'email') // => true
  validator.test('i@html.love', 'email') // => true
  validator.test('i@html', 'email') // => false
  ```

</details>
<details>
  <summary>url</summary>

  ```js
  validator.test('ws://xxx', 'url') // => false
  validator.test('https://github.com', 'url') // => true
  ```

</details>
<details>
  <summary>integer</summary>

  ```js
  validator.test(10, 'integer') // => true
  validator.test(-10, 'integer') // => true
  validator.test(1.01, 'integer') // => false
  ```

</details>
<details>
  <summary>id_card</summary>

  ```js
  validator.test('610724197303236577', 'id_card') // => true
  validator.test('61072419730323657X', 'id_card') // => true
  ```

</details>
<details>
  <summary>after:Date</summary>

  ```js
  validator.test(null, 'after:2017/11/07') // => false
  validator.test('2017/11/08', 'after:2017/11/07') // => true
  validator.test('2017/11/08', 'after:2017/11/7') // => true
  validator.test('2017-11-08', 'after:2017-11-07') // => true
  validator.test('2017-11-08', 'after:2017-11-09') // => false
  validator.test('2017-11-08', 'after:2017-11-08') // => false
  validator.test('2017.11.08', 'after:2017.11.08') // => false
  validator.test(new Date('2017-11-09'), 'after:2017-11-08') // => true
  ```

</details>
<details>
  <summary>after_equal:Date</summary>

  ```js
  validator.test('2017-11-08', 'after_equal:2017-11-07') // => true
  validator.test('2017-11-08', 'after_equal:2017-11-08') // => true
  ```

</details>
<details>
  <summary>before:Date</summary>

  ```js
  validator.test(null, 'before:2017/11/07') // => false
  validator.test('2017/11/06', 'before:2017/11/07') // => true
  validator.test('2017/11/06', 'before:2017/11/7') // => true
  validator.test('2017-11-06', 'before:2017-11-07') // => true
  validator.test('2017-11-06', 'before:2017-11-05') // => false
  validator.test('2017-11-06', 'before:2017-11-06') // => false
  validator.test('2017.11.06', 'before:2017.11.06') // => false
  validator.test(new Date('2017-11-09'), 'before:2017-11-10') // => true
  ```

</details>
<details>
  <summary>before_equal:Date</summary>

  ```js
  validator.test('2017-11-06', 'before_equal:2017-11-07') // => true
  validator.test('2017-11-06', 'before_equal:2017-11-05') // => false
  validator.test('2017-11-06', 'before_equal:2017-11-06') // => true
  ```

</details>
<details>
  <summary>size</summary>

  ```js
  validator.test('1234', 'size:4') // => true
  validator.test('12345', 'size:4') // => false
  validator.test('1234', 'size:2-4') // => true
  validator.test('1', 'size:2-4') // => false
  validator.test(null, 'size:2-4') // => false
  validator.test(123, 'size:2-4') // => false
  ```

</details>
<details>
  <summary>lt(less then)</summary>

  ```js
  validator.test('200', 'lt:400') // => false
  validator.test(200, 'lt:400') // => true
  validator.test(400, 'lt:400') // => false
  validator.test(401, 'lt:400') // => false
  ```

</details>
<details>
  <summary>lte(less and equal then)</summary>

  ```js
  validator.test('200', 'lte:400') // => false
  validator.test(200, 'lte:400') // => true
  validator.test(401, 'lte:400') // => false
  validator.test(400, 'lte:400') // => true
  validator.test(400.12, 'lte:400.12') // => true
  ```

</details>
<details>
  <summary>gt(greater then)</summary>

  ```js
  validator.test(401, 'gt:400') // => true
  validator.test(400, 'gt:400') // => false
  ```

</details>
<details>
  <summary>gte(greater and equal then)</summary>

  ```js
  validator.test(401, 'gte:400') // => true
  validator.test(400, 'gte:400') // => true
  validator.test(400.12, 'gte:400.12') // => true
  ```

</details>
<details>
  <summary>equal</summary>

  ```js
  validator.test('500', 'equal:500') // => false
  validator.test(500, 'equal:500') // => true
  validator.test(500.233, 'equal:500.233') // => true
  validator.test(399, 'equal:500') // => false
  ```

</details>
<details>
  <summary>in</summary>

  ```js
  validator.test(true, 'in:true') // => true
  validator.test(false, 'in:true') // => false
  validator.test('500', 'in:500') // => true
  validator.test(500, 'in:500,600') // => true
  validator.test('leo', 'in:aim,leo,ttt') // => true

  validator.test('le', 'in:aim,leo') // => false
  validator.test('', 'in:aim,leo') // => false
  validator.test(null, 'in:aim,leo') // => false
  ```

</details>
<details>
  <summary>not_in</summary>

  ```js
  validator.test(true, 'not_in:true') // => false
  validator.test(false, 'not_in:true') // => true
  validator.test('400', 'not_in:500') // => true
  validator.test(500.1, 'not_in:500') // => true
  validator.test('tttt', 'not_in:aim,leo,ttt') // => true

  validator.test('le', 'not_in:aim,leo') // => true
  validator.test('', 'not_in:aim,leo') // => true

  validator.test('leo', 'not_in:aim,leo') // => false
  validator.test(null, 'not_in:aim,leo') // => false
  ```

</details>

## 注册内置规则

可以通过 `registerRules(rules)` 方法来注册内置的规则，从而进行扩展。
有两点需要注意

- 在使用新增的规则前，必须先注册。

- 自定义的新规则名跟原内置规则名重复，则自定义规则会被忽略（即原内置的规则优先级最高）

```js
{
  'rule1': RegExp,
  /**
   * 当 rule 为函数时，有两个参数 rule(value, params)
   * 以 rule2 为例，`validator.test(value1, 'rule2:p1,p2,p3')`
   * rule2 函数接受到的参数为
   * value -> value1
   * params -> [p1, p2, p3]
   *
  **/
  'rule2': Function
}
```

- example

```js
const validator = new Validator()
const customRules = {
  'password': /^[^\s\u4E00-\u9FA5]{8,16}$/,
  'is_prime': function isPrimeNum (num, params) {
    if (params) console.log(params)
    if (typeof num !== 'number' || !Number.isInteger(num)) return false

    if (num === 2) {
      return true
    } else if (num % 2 === 0) {
      return false
    }

    const squareRoot = Math.sqrt(num)
    for (var i = 3; i <= squareRoot; i += 2) {
      if (num % i === 0) return false
    }

    return true
  },
  'contain': function (value, params) {
    if (!params) return false
    if (typeof value !== 'string') return false

    for (let i = 0; i < params.length; i++) {
      const item = params[i]
      if (value.indexOf(item) > -1) return true
    }
    return false
  }
}

validator.registerRules(customRules)

validator.test('abcd123', 'password') // => false
validator.test('abcd1234', 'password') // => true
validator.test(13, 'is_prime:just_test,hei')
// log: ['just_test', 'hei']
// => true
validator.test(24, 'is_prime') // => false
```

## 自定义正则

```js
validator.test('=3=', /=3=/) // => true
validator.test('=3=o', /=3=/) // => true
validator.test('=3=o', /=3=$/) // => false
```

## 自定义方法

```js
function isPrimeNum (num) {
  if (typeof num !== 'number' || !Number.isInteger(num)) return false

  if (num === 2) {
    return true
  } else if (num % 2 === 0) {
    return false
  }

  const squareRoot = Math.sqrt(num)
  for (var i = 3; i <= squareRoot; i += 2) {
    if (num % i === 0) return false
  }

  return true
}

validator.test(2, isPrimeNum) // => true
validator.test(991, isPrimeNum) // => true
validator.test(8, isPrimeNum) // => false
```
# 安装和使用

## 安装

通过 npm

```s
npm install --save validator-core
```

## 用法

```js
const Validator = require('validator-core')
const validator = new Validator()
// or
import Validator from 'validator-core'
const validator = new Validator()
```

使用标签方式加载

```html
<script src="https://unpkg.com/validator-core"></script>
<script type="text/javascript">
  const validator = new Validator()
  validator.test('hwenleung@gmail.com', 'email') // => true
</script>
```
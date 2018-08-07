# Installation an Usage

## install

```s
npm install validator-core
```

## usage

```js
const Validator = require('validator-core')
const validator = new Validator()
// or
import Validator from 'validator-core'
const validator = new Validator()
```

loaded as a standalone script

```html
<script src="https://unpkg.com/validator-core"></script>
<script type="text/javascript">
  const validator = new Validator()
  validator.test('hwenleung@gmail.com', 'email') // => true
</script>
```
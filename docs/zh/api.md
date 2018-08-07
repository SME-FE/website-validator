# API

Create an validator instance.

```js
import Validator from 'validator-core'
const validator = new Validator()
```

## Validator(ruleSet)

init validator instance with ruleSet

**Params**

- {[Object]} ruleSet

## validator.test(value, rule)

use built-in rule or RegExp, Function to test value

**Params**

- {any} value - value to test
- {String | RegExp | Function} rule

### Return Boolean

## validator.registerRules(rules)

add rules to built-in preset rules

**Params**

- {Object} rules - add rules to preset rules

### Return undefined

## validator.use(ruleSet)

add ruleSet to validator

**Params**

- {[Object]} ruleSet

## validator.check(value, ruleName)

check by ruleSet

**Params**

- {any} value - value to check
- {String} ruleName - ruleName fo ruleSet

### Return Object

- isError
- isPass
- ruleName
- tip - error tip

## validator.checkWithDiff(values, ruleNames, diffs)

check if one field rule will be affected by other field

**Params**

- {[any] | Object} value - value to check
- {[String]} ruleNames - list of ruleNames
- {[RegExp]} diffs

### Return Object

- isError
- isPass
- ruleName
- tip - error tip

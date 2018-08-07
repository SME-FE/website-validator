# 联动检查多个表单 field

```js
const ruleSet = [
  {
    name: 'ChineseName',
    rules: ['required', 'size:2-24', /^[\u4e00-\u9fa5]+$/],
    tips: ['不能为空', '长度为2到24', '不是中文']
  },
  {
    name: 'EnglishName',
    rules: ['required', 'size:2-24', /^[a-zA-Z\s]+$/],
    tips: ['Required...', 'Should have 2-24 letter', 'Not a valid English Name']
  }
]

const validator = new Validator(ruleSet)
const checkNameByLanguage = (language, data) => validator.checkWithDiff([language, data], ['ChineseName', 'EnglishName'], [/zh/i, /en/i])

let language = 'zh'
let data = '李狗蛋'
console.log(checkNameByLanguage(language, data))
// => {isError: false, isPass: true, name: 'ChineseName'}
language = 'en'
console.log(checkNameByLanguage(language, data))
// => {isError: true, isPass: false, name: 'EnglishName', tip: 'Not a valid English Name'}
data = 'Leon'
console.log(checkNameByLanguage(language, data))
// => {isError: false, isPass: true, name: 'EnglishName'}

// you may do this using Function
let language = 'zh'
let data = '李狗蛋'
const diffFn = (language, data) => {
  if (language === 'zh') {
    return {
      value: data,
      name: 'ChinaName'
    }
  }

  if (language === 'en') {
    return {
      value: data,
      name: 'EnglishName'
    }
  }
}

validator.checkWithDiff(diffFn(language, data))
data = 'Leon'
validator.checkWithDiff(diffFn(language, data))
language = 'en'
validator.checkWithDiff(diffFn(language, data))
```
# tinyparse

Make use of Template literals (template strings) `` `${}` `` and `Function constructor(arg1, arg2, ... argN, functionBody)` to build a super simple and native parser.

### Usage

```js
import { tinyparse } from 'tinyparse'

const template = '<div>${text}${this.name}</div>'
const data = { text: 'Hello, ' }
const thisObj = { name: 'tinyparse!' }

tinyparse(template, data, thisObj) // '<div>Hello, tinyparse!</div>'
```
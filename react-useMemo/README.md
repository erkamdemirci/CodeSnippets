## React useMemo Hook Logic

```
const useMemo = (fn, arr) => {
  numOfCalls++

  let returnedFunc = {}

  if (numOfCalls === 1) {
    returnedValue = fn()
    memoized = [...arr]
    returnedFunc.fn = returnedValue
  }

  if (numOfCalls > 1) {
    memoized.forEach((el) => {
      arr.forEach((elm) => {
        if (el === elm) {
          returnedFunc.fn = returnedValue
        } else {
          returnedFunc.fn = fn()
        }
      })
    })
  }

  return returnedFunc
}
```

Run:

> `node app.js`

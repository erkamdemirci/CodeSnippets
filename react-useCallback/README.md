## Node App - React useCallback Hook Logic

```
const useCallback = (fn, arr) => {
  numOfCalls++

  let returnedFunc = {}

  if (numOfCalls === 1) {
    callback = fn
    memoized = [...arr]
    returnedFunc.fn = callback
  }

  if (numOfCalls > 1) {
    memoized.forEach((el) => {
      arr.forEach((elm) => {
        if (el === elm) {
          returnedFunc.fn = callback
        } else {
          returnedFunc.fn = fn
        }
      })
    })
  }

  return returnedFunc
}
```

Run:

> `node app.js`

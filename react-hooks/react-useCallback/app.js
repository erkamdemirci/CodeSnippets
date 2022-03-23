// Internal React Engine useCallback Example //

let memoized = []
let numOfCalls = 0
let callback

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

// React Code //
let running = 0
const App = (dependency) => {
  const func = useCallback(() => {
    running++
    console.log('I run', running, running === 1 ? 'time' : 'times', running === 1 ? '- first time' : '- second time')
  }, [dependency])

  return func
}

const dependency1 = 'a'
const dependency2 = 'a'

//* ==== first render ==== //
const res1 = App(dependency1)
//* ==== second render ==== //
const res2 = App(dependency2)

res1.fn()
res2.fn()
console.log('has the function returned by useCallback the same identity?:', res1.fn === res2.fn)

// Internal React Engine useMemo Example //

let memoized = []
let numOfCalls = 0
let returnedValue

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

// React Code //
let running = 0
const App = (dependency) => {
  const func = useMemo(() => {
    running++
    console.log('I run', running, running === 1 ? 'time' : 'times', running === 1 ? '- first time' : '- second time')
    return dependency
  }, [dependency])
  return func
}

const dependency1 = 'a'
const dependency2 = 'a'

//* ==== first render ==== //
const res1 = App(dependency1)
//* ==== second render ==== //
const res2 = App(dependency2)

console.log('is the value returned by useMemo the same?:', res1.fn === res2.fn, res1.fn, res2.fn)

import { useSelector, useDispatch } from 'react-redux'
import { actions } from './store/redux-toolkit'

function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const increment = () => {
    dispatch(actions.increment())
  }
  const addBy = () => {
    dispatch(actions.addBy(10))
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={addBy}>Add 10</button>
    </div>
  )
}

export default App

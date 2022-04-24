import { createStore } from 'redux'

const reducerFn = (state = { counter: 0 }, action) => {
  // sync func
  // should not mutate the original state
  switch (action.type) {
    case 'INC':
      return { counter: state.counter + 1 }
    case 'ADD':
      return { counter: state.counter + action.payload }
    default:
      return state
  }
}

const store = createStore(reducerFn)

export default store

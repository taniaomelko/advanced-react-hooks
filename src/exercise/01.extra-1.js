// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  const countReducer = (state, newState) => {
    return newState;
  };
  const changeCount = (state, value) => {
    return state + value;
  };
  const [count, setCount] = React.useReducer(countReducer, initialCount);
  const increment = () => changeCount(step)

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App

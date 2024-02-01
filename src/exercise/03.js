// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext();

function CountProvider ({ children }) {
  const [state, setCount] = React.useState(0);
  const value = [state, setCount];

  return ( 
    <CountContext.Provider value={value} >
      {children}
    </CountContext.Provider>
  );
}

function useCount() {
  const context = React.useContext(CountContext);
  if (!context) {
    throw new Error('useCount may only be used from within a (child of a) CountProvider');
  }
  return context;
}

function CountDisplay() {
  const [count, ] = useCount();
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount();
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App

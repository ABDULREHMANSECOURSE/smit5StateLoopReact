import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  for (let i = 1; i <= 5; i++) {
    console.log('Rendering App component, iteration:', i)
  }
  return (<div>
    <h1>Simple Counter</h1>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
  </div>
  )
}

export default App

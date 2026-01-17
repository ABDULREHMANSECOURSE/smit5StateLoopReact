import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  for (let i = 1; i <= 5; i++) {
    console.log(count)
  }
}
export default App
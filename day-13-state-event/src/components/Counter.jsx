import { useState } from "react"

function Counter () {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)

    // best practice
    // setCount(state => state + 1)
  }

  const decrement = () => {
    if (count == 0) return
    setCount(count - 1)
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter
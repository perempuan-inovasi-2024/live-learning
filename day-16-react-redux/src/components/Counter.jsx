import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { cartIncrease, cartDecrease } from '../redux/cartSlice'

function Counter() {
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)

  function decrement () {
    setCount(count - 1)
    dispatch(cartDecrease())
  }

  function increment () {
    setCount(count + 1)
    dispatch(cartIncrease())
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
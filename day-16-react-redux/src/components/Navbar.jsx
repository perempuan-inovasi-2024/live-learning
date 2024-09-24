import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {
  const cart = useSelector(state => state.cart)
  console.log(cart)

  return (
    <header>
      <div>
        Shop
      </div>

      <nav>
        <ul>
          <li>Home</li>
          <li>Product</li>
        </ul>
      </nav>

      <button>cart {cart.value}</button>
    </header>
  )
}

export default Navbar
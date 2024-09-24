import React from 'react'
import Counter from './Counter'

export default function ProductItem({product}) {
  return (
    <div>
      <span>{product.name}</span>
      <span>{product.price}</span>
      <Counter />
    </div>
  )
}

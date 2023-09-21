import React, { useState } from 'react'

function CartData({ price }) {
  const [increment, setIncrement] = useState(1)

  const incrementHandler = () => {
    setIncrement(increment + 1);
  }

  const decrementHandler = () => {
    if (increment >= 2)
      setIncrement(increment - 1);
  }

  // let price = 5000;

  return (
    <div>
      <p>Quantity:</p>
      <div className='d-flex'>
        <button className='btn badge rounded-circle bg-secondary col-1 button-cart' onClick={decrementHandler}>-</button>
        <p className='ms-2 me-2'>{increment}</p>
        <button className='btn badge rounded-circle bg-secondary col-1 button-cart' onClick={incrementHandler}>+</button>
      </div>
      <p className='fw-bold'>Shipping: {price * increment}</p>
    </div>
  )
}

export default CartData

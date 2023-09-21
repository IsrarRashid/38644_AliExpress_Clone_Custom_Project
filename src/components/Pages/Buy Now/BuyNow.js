import React from 'react'

const BuyNow = () => {
  return (
    <div class="container">

  <div class="row align-items-center">
    <div class="col">
        <div class="col bg-white mt-5 p-3 rounded">
        <h4>Shipping Address</h4>
        <label>+Add new address</label>
    </div>
        <div class="col bg-white mt-5 p-3 rounded">
        <h4>Payment Methods</h4>
        <label>Select Payment Method</label>
    </div>
        
    </div>
    <div class="col">
        <h4>Summary</h4>
        <ul class="list-group">
        <li class="list-group-item">Total Item Costs</li>
        <li class="list-group-item">Promo Code</li>
        <li class="list-group-item">Total Shipping</li>
        <li class="list-group-item">Total</li>
        <li class="list-group-item"><button className='btn bg-orange-shade btn-lg me-2 text-white rounded-pill col-12'>Place Order</button></li>
</ul>       
    </div>
  </div>

</div>
  )
}

export default BuyNow

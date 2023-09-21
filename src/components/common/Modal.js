import React from 'react'

const Modal = () => {
  return (
    <div>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add to Cart
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class=" modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content col-12">
      <div class="modal-header">
        <p class="modal-title" id="exampleModalLabel">
          <i class="fa-solid fa-circle-check text-success"></i>&nbsp;
          A new item has been added to your Shopping Cart. You now have items in your Shopping Cart.</p>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-footer d-flex justify-content-center">
        <button type="button" class="btn btn-danger text-white">View Shopping Cart</button>
        <button type="button" class="btn btn-outline-success " data-bs-dismiss="modal">Continue Shopping</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Modal

import React from 'react'
import { Link } from 'react-router-dom'

const P1 = ({data}) => {
  return (
    <div className='mt-4'>
      <Link className='product-link' to={data.to}>
              <div class="card border-0">
                <img src={data.src} class="card-img-top rounded" alt="..." />
                {data.sale === "true" && <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {data.salePercent}
                  <span class="visually-hidden">unread messages</span>
              </span>}
                <h5 className='text-dark fw-bold m-0 text-center'>{data.price}</h5>
              <p className='text-dark m-0 text-center'>{data.piecesSold} Sold</p>
              </div>
      </Link>
    </div>
    )
  }

export default P1

import React from 'react'
import { Link } from 'react-router-dom'

function Products({data,heading}) {
  return (
    <div className='container'>
      <p className='text-center fs-3'>{heading}</p>
      <div className='row'>
        {
          data.map((sprod)=>{
            return(
              <div className="card m-3">
              <img src={sprod.src} className="card-img-top" height={250} width={160} alt="..." />
              <div className="card-body">
                <h5 className="card-title">{sprod.pName}</h5>
                <p className="card-text">{sprod.price}</p>
                <Link to={`/products/${sprod.id}`} className="btn btn-primary">Buy now</Link>
              </div>
            </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Products

import React from 'react'
import P1 from '../common/ProductDesigns/P1'
import LinkButton from '../common/LinkButton'

const SuperDeals = ({data}) => {
  return (
    <div className='container-fluid bg-white p-4 shadow bg-body rounded'>
        <div className='row'>
      <div className='d-flex justify-content-between'>
          <h3 className='fw-bold fst-italic'>Super<span className='text-danger'>Deals &nbsp;</span></h3>
          <h5 className='text-secondary mt-1 d-none d-lg-block '> Top products. Incredible prices.</h5>
          <LinkButton name="view more" to="/products" className="product-link text-secondary"/>
      </div>
        </div> 
        <div className='row'>
                    {
                        data.slice(0,6).map((element)=>{
                            return(
                                <div className='col-lg-2 col-md-2 col-sm-4'>
                                <P1 data ={element} />
                                </div>
                            )
                        })
                    }
        </div>
    </div>
  )
}

export default SuperDeals


// name = "super deal"

// name.split(" ")

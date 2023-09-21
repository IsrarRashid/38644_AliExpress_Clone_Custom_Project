import React from 'react'
import P2 from '../../common/ProductDesigns/P2'
import LinkButton from '../../common/LinkButton'

const ProductsOther = ({heading,data}) => {
  return (
    <div className='container-fluid'>
        <div className='row'>
      <div className='text-center'>
          <p className='fs-3'>{heading}</p>
      </div>
        </div> 
        <div className='row'>
                    {
                        data.map((element)=>{
                            return(
                                <div className='col-lg-2 col-md-2 col-sm-4'>
                                <P2 data ={element}/>
                                </div>
                            )
                        })
                    }
        </div>
    </div>
  )
}

export default ProductsOther
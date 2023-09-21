import React from 'react'
import SingleProduct from './SingleProduct'
import LinkButton from '../common/LinkButton'
import ListDB from './data/shopGuideData'

const ShoppingGuide = ({src1,src2,src3,src4,src5,src6,src7,src8,src9,src10,src11,src12}) => {
  return (
    <div className='shoppingGuide-bg'>
        <h6 className='pt-4 ps-3 text-white'>Your Fave shopping guide</h6>
        <p className='ps-3 text-white'>Checkout the latest new deals</p>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className='bg-white m-3 rounded-3'>
      <div className="carousel-inner ">
        <div className="carousel-item active">
        {ListDB.map((prod)=>{
          return(
            <div className='row p-4 pt-3'>
            <div className='col-6'>
              <LinkButton to="/products" src={prod.pic} salePercent="98" className="btn position-relative" imgClassName="d-block img-fluid rounded-3 border"></LinkButton>
            </div>
            <div className='col-6'>
            <LinkButton to="/products" src={prod.pic} salePercent="98" className="btn position-relative" imgClassName="d-block img-fluid rounded-3 border"></LinkButton>
            </div>
        </div>
          )
        })}
        
        </div>
        <div className="carousel-item">
        {ListDB.map((prod)=>{
          return(
<div className='row p-4 pt-3'>
            <div className='col-6'>
              <LinkButton to="/products" src={prod.pic} salePercent="98" className="btn position-relative" imgClassName="d-block img-fluid rounded-3 border"></LinkButton>
            </div>
            <div className='col-6'>
            <LinkButton to="/products" src={prod.pic} salePercent="98" className="btn position-relative" imgClassName="d-block img-fluid rounded-3 border"></LinkButton>
            </div>
        </div>
          )
        })}
        
        </div>
        <div className="carousel-item">
        {ListDB.map((prod)=>{
          return(
          <div className='row p-4 pt-3'>
            <div className='col-6'>
              <LinkButton to="/products" src={prod.pic} salePercent="98" className="btn position-relative" imgClassName="d-block img-fluid rounded-3 border"></LinkButton>
            </div>
            <div className='col-6'>
            <LinkButton to="/products" src={prod.pic} salePercent="98" className="btn position-relative" imgClassName="d-block img-fluid rounded-3 border"></LinkButton>
            </div>
        </div>
          )
        })}
        </div>       
      </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon bg-secondary rounded-circle" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon bg-secondary rounded-circle" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default ShoppingGuide
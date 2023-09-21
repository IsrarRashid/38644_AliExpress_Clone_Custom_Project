import React from 'react'
import SingleProduct from './SingleProduct'
import LinkButton from '../common/LinkButton'

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
        <div className='row p-4 pt-3'>
            <div className='col-6'>
            {/* <a href type="button" class="btn position-relative">
            <SingleProduct to="/products" src={src1}/>
            <img src={src1} className="d-block img-fluid rounded-3" alt="..."/>
              <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
            -75%
            <span class="visually-hidden">unread messages</span>
              </span>
            </a> */}
              <LinkButton to="/products" src={src1} salePercent="98" className="btn position-relative" imgClassName="d-block img-fluid rounded-3 border"></LinkButton>
            </div>
            <div className='col-6'>
            <LinkButton to="/products" src={src1} salePercent="98" className="btn position-relative" imgClassName="d-block img-fluid rounded-3 border"></LinkButton>
            {/* <a href type="button" class="btn position-relative">
            <img src={src2} className="d-block img-fluid rounded-3" alt="..."/>
              <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
            -92%
            <span class="visually-hidden">unread messages</span>
              </span>
            </a> */}
            </div>
        </div>
        <div className='row p-4 pt-2'>
            <div className='col-6'>
            {/* <a href type="button" class="btn position-relative">
            <img src={src3} className="d-block img-fluid rounded-3" alt="..."/>
              <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
            -65%
            <span class="visually-hidden">unread messages</span>
              </span>
            </a> */}
              <LinkButton to="/products" src={src1} salePercent="98" className="btn position-relative" imgClassName="d-block img-fluid rounded-3 border"></LinkButton>
            </div>
            <div className='col-6'>
            {/* <a href type="button" class="btn position-relative">
            <img src={src4} className="d-block img-fluid rounded-3" alt="..."/>
              <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
            -86%
            <span class="visually-hidden">unread messages</span>
              </span>
            </a> */}
              <LinkButton to="/products" src={src1} salePercent="98" className="btn position-relative" imgClassName="d-block img-fluid rounded-3 border"></LinkButton>
            </div>
        </div>
        </div>
        <div className="carousel-item">
        <div className='row p-4 pt-3'>
            <div className='col-6'>
            {/* <a href type="button" class="btn position-relative">
            <img src={src5} className="d-block img-fluid rounded-3" alt="..."/>
              <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
            -75%
            <span class="visually-hidden">unread messages</span>
              </span>
            </a> */}
              <LinkButton to="/products" src={src1} salePercent="98" className="btn position-relative" imgClassName="d-block img-fluid rounded-3 border"></LinkButton>
            </div>
            <div className='col-6'>
            {/* <a href type="button" class="btn position-relative">
            <img src={src6} className="d-block img-fluid rounded-3" alt="..."/>
              <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
            -92%
            <span class="visually-hidden">unread messages</span>
              </span>
            </a> */}
              <LinkButton to="/products" src={src1} salePercent="98" className="btn position-relative" imgClassName="d-block img-fluid rounded-3 border"></LinkButton>
            </div>
        </div>
        <div className='row p-4 pt-2'>
            <div className='col-6'>
            {/* <a href type="button" class="btn position-relative">
            <img src={src7} className="d-block img-fluid rounded-3" alt="..."/>
              <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
            -65%
            <span class="visually-hidden">unread messages</span>
              </span>
            </a> */}
              <LinkButton to="/products" src={src1} salePercent="98" className="btn position-relative" imgClassName="d-block img-fluid rounded-3 border"></LinkButton>
            </div>
            <div className='col-6'>
            {/* <a href type="button" class="btn position-relative">
            <img src={src8} className="d-block img-fluid rounded-3" alt="..."/>
              <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
            -86%
            <span class="visually-hidden">unread messages</span>
              </span>
            </a> */}
              <LinkButton to="/products" src={src1} salePercent="98" className="btn position-relative" imgClassName="d-block img-fluid rounded-3 border"></LinkButton>

            </div>
        </div>
        </div>
        <div className="carousel-item">
        <div className='row p-4 pt-3'>
            <div className='col-6'>
            {/* <a href type="button" class="btn position-relative">
            <img src={src9} className="d-block img-fluid rounded-3" alt="..."/>
              <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
            -75%
            <span class="visually-hidden">unread messages</span>
              </span>
            </a> */}
              <LinkButton to="/products" src={src1} salePercent="98" className="btn position-relative" imgClassName="d-block img-fluid rounded-3 border"></LinkButton>
            </div>
            <div className='col-6'>
            {/* <a href type="button" class="btn position-relative">
            <img src={src10} className="d-block img-fluid rounded-3" alt="..."/>
              <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
            -92%
            <span class="visually-hidden">unread messages</span>
              </span>
            </a> */}
              <LinkButton to="/products" src={src1} salePercent="98" className="btn position-relative" imgClassName="d-block img-fluid rounded-3 border"></LinkButton>
            </div>
        </div>
        <div className='row p-4 pt-2'>
            <div className='col-6'>
            {/* <a href type="button" class="btn position-relative">
            <img src={src11} className="d-block img-fluid rounded-3" alt="..."/>
              <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
            -65%
            <span class="visually-hidden">unread messages</span>
              </span>
            </a> */}
              <LinkButton to="/products" src={src1} salePercent="98" className="btn position-relative" imgClassName="d-block img-fluid rounded-3 border"></LinkButton>
            </div>
            <div className='col-6'>
            {/* <a href type="button" class="btn position-relative">
            <img src={src12} className="d-block img-fluid rounded-3" alt="..."/>
              <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
            -86%
            <span class="visually-hidden">unread messages</span>
              </span>
            </a> */}
              <LinkButton to="/products" src={src1} salePercent="98" className="btn position-relative" imgClassName="d-block img-fluid rounded-3 border"></LinkButton>
            </div>
        </div>
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
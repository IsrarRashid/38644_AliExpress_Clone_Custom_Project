import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const P2 = ({data}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () =>{
    setIsHovered(true);
  };

  const handleMouseLeave = ()=>{
    setIsHovered(false);
  }
  
  return (
    <div className='mt-4'>
      <Link className='product-link' to={data.to}>
              <div className={`card ${isHovered ? "bg-danger border-danger":"bg-white border-white" } border border-5`}>
                <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="card border-0">
                  <img src={data.src} className="card-img-top p-2 img-fluid product-image" alt="..." />
                  <div className='d-flex justify-content-center'>
                    {data.sale === "true" && <h5 className='text-danger fw-bold me-3'>{data.salePrice}</h5>}
                    {
                      data.sale === "true" ? (
                        <del className='text-secondary'>
                      <h5 className={`fw-bold me-3${data.sale==="true"? "":"text-danger"}`}>{data.price}</h5>
                        </del>
                      ):
                      <h5 className='text-danger fw-bold me-3'>{data.price}</h5>
                      }
                  </div>
                    <p className='text-dark text-center m-0 fs-5'>{data.piecesSold} Sold</p>
                </div>
                <span className='text-white text-center'><i class="fa-solid fa-circle-info"></i> Similar Items</span>
              </div>
      </Link>
    </div>
    )
  }

export default P2

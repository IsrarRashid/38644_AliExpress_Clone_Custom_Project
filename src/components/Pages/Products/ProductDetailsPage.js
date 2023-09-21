import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ListDB from "./data/ProductsData"
import CartData from '../../CartData'
import AddToCartModal from './AddToCartModal'
import LinkButton from '../../common/LinkButton'

const ProductDetailsPage = () => {
    let { id } = useParams();
    const navigate = useNavigate();

    let fData = ListDB.find(x => x.id == id);

    return (
        <>
            <div className='container'>
            {/* <a className='btn btn-warning m-4' onClick={()=>navigate("/products")}>Back to home</a> */}
            <div className='row d-flex mt-5'>
                        <div className='col-5'>
                        <img src={`/${fData.src}`} className='img-fluid' />
                        </div>
                        <div className='col-6'>
                        <p>{fData.name}</p>
                        <div className='bg-danger text-white text-center rounded-top'>Exclusive first order price</div>
                        <div className='bg-price rounded-bottom'>
                        <h4 className='text-white ms-3'>{fData.price}</h4>
                        </div>
                        <p className='fs-bold fw-bold'>Free Shipping to Pakistan</p>
                        <CartData price={fData.price} />
                        <p className='fs-6'>From China to Pakistan via Cainiao Super Economy Global</p>
                        <p className='fs-6'>Estimated Delivery Time: 60-60 Days</p>
                        <div className='d-flex'>
                        <LinkButton className="btn bg-orange-shade btn-lg me-2 text-white" name="Buy Now" to="/buy-now" />
                        <AddToCartModal/>
                        </div>
                        </div>
                    <div className='col-6'>
                        <ul className="list-group">
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetailsPage

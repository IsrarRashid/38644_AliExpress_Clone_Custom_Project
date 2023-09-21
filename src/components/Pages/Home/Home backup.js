import React from 'react'
import Menu from '../../Menu/Menu'
import Services from '../../Services'
import ShoppingGuide from '../../Shopping Guide/ShoppingGuide'
import Sale from '../../Sale'
import Welcome from '../../Welcome'
import LinkButton from '../../common/LinkButton'
import SuperDeals from '../../Super Deals/SuperDeals'

const Home = () => {
  return (
    <div className="container-fluid">
        <div className="row d-flex">
          <div className="col-lg-2 m-4 p-0 bg-white">
            <Menu />
          </div>
          <div className="col-lg-9 mt-4 p-0 ">
            <div className="col-lg-12">
              <Services />
            </div>
            <div className="row">
            <div className="col-5 rounded-3 p-3">
            {/* <ShoppingGuide/> */}
            <SuperDeals/>
            </div>
              <div className="col-4 mt-4">
              <LinkButton to="/products" src="/images/sale/sale.webp" imgClassName="img-fluid rounded-3"></LinkButton>
              </div>
              <div className="col-3">
                <Welcome />
                <LinkButton className="btn btn-primary" name="Products" to="/products" />
              </div>
            </div>

          </div>
        </div>
      </div>
  )
}

export default Home
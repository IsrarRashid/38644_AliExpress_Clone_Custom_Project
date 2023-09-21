import React from "react";
import Menu from "../../Menu/Menu";
import Services from "../../Services";
import SuperDeals from "../../Super Deals/SuperDeals";
import shopguideData from "../../Shopping Guide/data/shopGuideData";
import ProductsOther from "../Products/ProductsOther";
import productsData from "../Products/data/ProductsData";
import Footer from "../Footer";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row d-flex">
        <div className="col-lg-2 m-4 p-0 bg-white">
          <Menu />
        </div>
        <div className="col-lg-9">
          <div className="col-lg-12 d-none d-lg-block m-2">
            <Services />
          </div>
          <div class="container-fluid">
            <div class="row">
              <div class="col">
                <SuperDeals data={productsData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col p-0">
          <ProductsOther heading="More To Love" data={shopguideData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

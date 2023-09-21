import React from "react";
import DropDownHeadLink from "../common/DropDown/DropDownHeadLink";
import DropDownTailLink from "../common/DropDown/DropDownTailLink";
import LinkButton from "../common/LinkButton";
import SignIn from "../SignIn";
import DataList from "../common/DataList";
import shipTo from "./consts/shipTo"
import language from "./consts/languages"
import currency from "./consts/currency";
import P1 from "../common/ProductDesigns/P1";
import { Link } from "react-router-dom";

const Navbar = () => {
  const toHome = "/";
  return (
    <>
    <div className="container-fluid">
      <div className="row d-none d-lg-block">
        <div className="col-12 d-flex justify-content-end bg-light">
          <ul className="nav nav-tabs border-0 my-nav ">
            <li className="nav-item dropdown">
              <DropDownHeadLink name="Sell On Ali Express" href="#" />
              <ul className="dropdown-menu">
                <li className=" d-none d-sm-block">
                    <DropDownTailLink name="Seller Login" href="#" />
                </li>
                <li>
                <DropDownTailLink name="Non-Chinese Seller Registration" href="#" />
                </li>
              </ul>
            </li>
            <span className="pt-1">|</span>
            <li className="nav-item dropdown">
            <DropDownHeadLink name="Help" href="#" />
              <ul className="dropdown-menu">
                <li>
                  <LinkButton className="dropdown-item" name="Help Center" to={toHome} />
                </li>
                <li>
                  <LinkButton className="dropdown-item" name="Disputes & Reports" to={toHome} />
                </li>
                <li>
                  <LinkButton className="dropdown-item" name="Report IPR Infringement" to={toHome} />
                </li>
              </ul>
            </li>
            <span className="pt-1">|</span>
            <li className="nav-item">
              <LinkButton className="nav-link" name="Buyer Protection" to={toHome} />
            </li>
            <span className="pt-1">|</span>
            <li className="nav-item">
              <LinkButton className="nav-link" iconClassBefore="fa-solid fa-mobile-screen-button me-2" name="App" to={toHome} />
            </li>
            <span className="pt-1">|</span>
            <li className="nav-item dropdown">
              <DropDownHeadLink name="/English/PKR" href="#" iconClass="fa-regular fa-flag me-2" />
              <ul className="dropdown-menu">
              <DataList heading="Ship To" data={shipTo} />
              <DataList heading="Language" data={language} />
              <DataList heading="Currency" data={currency} />
              </ul>
            </li>
            <span className="pt-1">|</span>
            <li className="nav-item">
              <LinkButton className="nav-link" iconClassBefore="fa-regular fa-heart me-2" name="Wish List" to={toHome} />
            </li>
            <span className="pt-1">|</span>
            <li className="nav-item dropdown">
            <DropDownHeadLink name="Account" href="#" iconClass="fa-regular fa-user me-2" />
              <ul className="dropdown-menu">
                <li>
                    <label className="">Welcome to AliExpress!</label>
                    <span className="d-flex justify-content-center">
                        <LinkButton name="Register" to="/register" className="btn btn-danger text-white" />
                        <LinkButton name="Sign In" to="/sign-in" className="btn btn-secondary text-white" />
                    </span>
                    <hr />
                <LinkButton name="My Orders" to={toHome} className="dropdown-item" />
                </li>
                <li>
                <LinkButton name="My Coins" to={toHome} className="dropdown-item" />
                </li>
                <li>
                <LinkButton name="Message Center" to={toHome} className="dropdown-item" />
                </li>
                <li>
                <LinkButton name="Payment" to={toHome} className="dropdown-item" />
                </li>
                <li>
                <LinkButton name="Wish List" to={toHome} className="dropdown-item" />
                </li>
                <li>
                <LinkButton name="My Favorite Stores" to={toHome} className="dropdown-item" />
                </li>
                <li>
                <LinkButton name="My Coupons" to={toHome} className="dropdown-item" />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="col-2"><LinkButton className="navbar-brand" imgClassName="img-fluid" to="/" src="/images/logo/logo1.png" ></LinkButton></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item d-sm-block">
        <Link to={toHome}>
  <div className="position-relative me-4 ms-4">
    <i className="fa-solid fa-cart-plus fa-2x"></i>
    <span className="position-absolute top-0 end-0 translate-middle badge rounded-pill bg-danger">99+</span>
  </div>
</Link>
            {/* <LinkButton to={toHome} iconClassBefore="fa-solid fa-cart-plus fa-lg me-1" /> */}
        </li>
        <li className="nav-item dropdown d-sm-block d-xxl-none d-xl-none d-lg-none d-lg-none">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
                <LinkButton name="Register" to={toHome} className="btn btn-danger ms-2"/>
                <LinkButton name="Sign In" to={toHome} className="btn btn-secondary ms-2"/>    
            </li>
          </ul>
        </li>
      </ul>
      <form className="input-group mt-2">
        <input className="col-md-2 form-control main-search-bar" type="search" placeholder="Search" aria-label="Search" />
        <span className="input-group-text main-search-icon"><i className="fa-solid fa-magnifying-glass"></i></span>
      </form>
    </div>
  </div>
</nav>

    <div className="container-fluid bg-white">
      <div className="row d-none d-md-block">
      <ul className="nav d-flex justify-content-center my-nav ">
    <li className="nav-item">
    <LinkButton name="croses charms" to="/products" className="nav-link"/>
    </li>
    <span className="pt-1">|</span>
    <li className="nav-item">
    <LinkButton name="apple watch brand" to="/products" className="nav-link"/>
    </li>
    <span className="pt-1">|</span>
    <li className="nav-item">
    <LinkButton name="kitchen accessories" to="/products" className="nav-link"/>
    </li>
    <span className="pt-1">|</span>
    <li className="nav-item">
    <LinkButton name="gel nail polish" to="/products" className="nav-link"/>
    </li>
    <span className="pt-1">|</span>
    <li className="nav-item">
    <LinkButton name="fishing" to="/products" className="nav-link"/>
    </li>
    <span className="pt-1">|</span>
    <li className="nav-item">
    <LinkButton name="human hair wigs" to="/products" className="nav-link"/>
    </li>
</ul>
      </div>
    </div>
    </>
  );
};

export default Navbar;

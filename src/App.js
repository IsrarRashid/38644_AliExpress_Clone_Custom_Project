import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import Products from "./components/Pages/Products/Products"
import ProductDetailsPage from "./components/Pages/Products/ProductDetailsPage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import shopguideData from './components/Shopping Guide/data/shopGuideData'
import ProductsOther from "./components/Pages/Products/ProductsOther";
import Modal from "./components/common/Modal";
import BuyNow from "./components/Pages/Buy Now/BuyNow";

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<ProductsOther heading="Products" data={shopguideData}/>} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/register' element={<Register />} />
      <Route path='/products/:id' element={<ProductDetailsPage />}/>
      <Route path='/buy-now' element={<BuyNow />}/>
      <Route path='*' element={<h1>Error 404 - page not found</h1>} />
    </Routes>
    </Router>
  );
}

export default App;

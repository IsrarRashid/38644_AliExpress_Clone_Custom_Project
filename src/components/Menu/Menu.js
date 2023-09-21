import React from 'react'
import MenuTab from '../common/Menu/MenuTab'
import womenFashionData from "./consts/women fashion/womenFashionData"
import swimmerData from "./consts/women fashion/swimmerData"
import LinkButton from '../common/LinkButton'
import bottomsData from "./consts/women fashion/bottomsData"
import plusSizeClothesData from "./consts/women fashion/plusSizeClothesData"
import weddingsEvents from "./consts/women fashion/weddingsEventsData"
import womenUnderwearData from "./consts/women fashion/womenUnderwearData"
import accessoriesData from "./consts/women fashion/accessoriesData"
import hotSaleData from "./consts/men fashion/hoteSaleData"
import bottomsDataMen from "./consts/men fashion/bottomsData"
import outerwearJacketsData from "./consts/men fashion/outwearJacketsData"
import underwearLoungewearData from "./consts/men fashion/underwearLongunewearData"
import accessoriesDataMen from "./consts/men fashion/accessoriesData"
import noveltySpecialUseData from "./consts/men fashion/noveltySpecialUseData"

const Menu = () => {
  return (
    <div>
        <span className="input-group-text rounded-top border-bottom-0">
        <i className="fa-sharp fa-solid fa-bars me-3"></i>
            <span className='fw-bold'>Categories</span></span>

{/* ==============Start===================== */}
<div className="btn-group col-12 dropend">
  <button type="button" className="btn rounded-0 dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
  <div className='d-flex'>
  <div><i className="fa-solid fa-child-dress fa-lg text-secondary me-2"></i></div>
  <div>Women's Fashion</div>
  </div>
  </button>
  <div className="dropdown-menu side-menu" id='side-menu'>
      <ul>
        {womenFashionData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        
        {swimmerData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        <li><MenuTab to="/products" name="Summer Sale" src="/images/menu tabs/women clothing/summer sale.png" /></li>
      </ul>
      <ul>
        {bottomsData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        {plusSizeClothesData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        {weddingsEvents.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        <li><MenuTab href="#" name="Beach Style" src="/images/menu tabs/women clothing/pngwing.com.png" /></li>
      </ul>
      <ul>
        <li><a href="#" className="dropdown-item dropdown-menu__heading">Women's Underwear </a></li>
        {womenUnderwearData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        {accessoriesData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        <li><MenuTab href="#" name="Sleep & Longue" src="/images/menu tabs/women clothing/pngegg.png" /></li>
      </ul>
  </div>
</div>
{/* ===============End==================== */}

{/* ==============Start===================== */}
<div className="btn-group col-12 dropend">
  <button type="button" className="btn rounded-0 dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
  <div className='d-flex'>
  <div><i className="fa-solid fa-child fa-lg text-secondary me-2"></i></div>
  <div>Men's Fashion</div>
  </div>
  </button>
  <div className="dropdown-menu side-menu">
    <ul>
    {hotSaleData.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    {bottomsDataMen.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    <li><MenuTab href="#" name="Summer Sale" src="/images/menu tabs/men clothing/tshirt.png" /></li>
    </ul>
    <ul>
    {outerwearJacketsData.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    {underwearLoungewearData.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    <li><MenuTab href="#" name="Beach Style" src="/images/menu tabs/men clothing/sport.png" /></li>
    </ul>
    <ul>
    {accessoriesDataMen.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    {noveltySpecialUseData.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    <li><MenuTab href="#" name="Sleep & Longue" src="/images/menu tabs/men clothing/pants.png"/></li>
    </ul>
  </div>
</div>
{/* ===============End==================== */}

{/* ==============Start===================== */}
<div className="btn-group col-12 dropend">
  <button type="button" className="btn rounded-0 dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
  <div className='d-flex'>
  <div><i className="fa-solid fa-child-dress fa-lg text-secondary me-2"></i></div>
  <div>Women's Fashion</div>
  </div>
  </button>
  <div className="dropdown-menu side-menu" id='side-menu'>
      <ul>
        {womenFashionData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        
        {swimmerData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        <li><MenuTab to="/products" name="Summer Sale" src="/images/menu tabs/women clothing/summer sale.png" /></li>
      </ul>
      <ul>
        {bottomsData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        {plusSizeClothesData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        {weddingsEvents.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        <li><MenuTab href="#" name="Beach Style" src="/images/menu tabs/women clothing/pngwing.com.png" /></li>
      </ul>
      <ul>
        <li><a href="#" className="dropdown-item dropdown-menu__heading">Women's Underwear </a></li>
        {womenUnderwearData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        {accessoriesData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        <li><MenuTab href="#" name="Sleep & Longue" src="/images/menu tabs/women clothing/pngegg.png" /></li>
      </ul>
  </div>
</div>
{/* ===============End==================== */}

{/* ==============Start===================== */}
<div className="btn-group col-12 dropend">
  <button type="button" className="btn rounded-0 dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
  <div className='d-flex'>
  <div><i className="fa-solid fa-child fa-lg text-secondary me-2"></i></div>
  <div>Men's Fashion</div>
  </div>
  </button>
  <div className="dropdown-menu side-menu">
    <ul>
    {hotSaleData.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    {bottomsDataMen.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    <li><MenuTab href="#" name="Summer Sale" src="/images/menu tabs/men clothing/tshirt.png" /></li>
    </ul>
    <ul>
    {outerwearJacketsData.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    {underwearLoungewearData.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    <li><MenuTab href="#" name="Beach Style" src="/images/menu tabs/men clothing/sport.png" /></li>
    </ul>
    <ul>
    {accessoriesDataMen.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    {noveltySpecialUseData.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    <li><MenuTab href="#" name="Sleep & Longue" src="/images/menu tabs/men clothing/pants.png"/></li>
    </ul>
  </div>
</div>
{/* ===============End==================== */}

{/* ==============Start===================== */}
<div className="btn-group col-12 dropend">
  <button type="button" className="btn rounded-0 dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
  <div className='d-flex'>
  <div><i className="fa-solid fa-child-dress fa-lg text-secondary me-2"></i></div>
  <div>Women's Fashion</div>
  </div>
  </button>
  <div className="dropdown-menu side-menu" id='side-menu'>
      <ul>
        {womenFashionData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        
        {swimmerData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        <li><MenuTab to="/products" name="Summer Sale" src="/images/menu tabs/women clothing/summer sale.png" /></li>
      </ul>
      <ul>
        {bottomsData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        {plusSizeClothesData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        {weddingsEvents.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        <li><MenuTab href="#" name="Beach Style" src="/images/menu tabs/women clothing/pngwing.com.png" /></li>
      </ul>
      <ul>
        <li><a href="#" className="dropdown-item dropdown-menu__heading">Women's Underwear </a></li>
        {womenUnderwearData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        {accessoriesData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        <li><MenuTab href="#" name="Sleep & Longue" src="/images/menu tabs/women clothing/pngegg.png" /></li>
      </ul>
  </div>
</div>
{/* ===============End==================== */}

{/* ==============Start===================== */}
<div className="btn-group col-12 dropend">
  <button type="button" className="btn rounded-0 dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
  <div className='d-flex'>
  <div><i className="fa-solid fa-child fa-lg text-secondary me-2"></i></div>
  <div>Men's Fashion</div>
  </div>
  </button>
  <div className="dropdown-menu side-menu">
    <ul>
    {hotSaleData.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    {bottomsDataMen.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    <li><MenuTab href="#" name="Summer Sale" src="/images/menu tabs/men clothing/tshirt.png" /></li>
    </ul>
    <ul>
    {outerwearJacketsData.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    {underwearLoungewearData.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    <li><MenuTab href="#" name="Beach Style" src="/images/menu tabs/men clothing/sport.png" /></li>
    </ul>
    <ul>
    {accessoriesDataMen.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    {noveltySpecialUseData.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    <li><MenuTab href="#" name="Sleep & Longue" src="/images/menu tabs/men clothing/pants.png"/></li>
    </ul>
  </div>
</div>
{/* ===============End==================== */}

{/* ==============Start===================== */}
<div className="btn-group col-12 dropend">
  <button type="button" className="btn rounded-0 dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
  <div className='d-flex'>
  <div><i className="fa-solid fa-child-dress fa-lg text-secondary me-2"></i></div>
  <div>Women's Fashion</div>
  </div>
  </button>
  <div className="dropdown-menu side-menu" id='side-menu'>
      <ul>
        {womenFashionData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        
        {swimmerData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        <li><MenuTab to="/products" name="Summer Sale" src="/images/menu tabs/women clothing/summer sale.png" /></li>
      </ul>
      <ul>
        {bottomsData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        {plusSizeClothesData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        {weddingsEvents.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        <li><MenuTab href="#" name="Beach Style" src="/images/menu tabs/women clothing/pngwing.com.png" /></li>
      </ul>
      <ul>
        <li><a href="#" className="dropdown-item dropdown-menu__heading">Women's Underwear </a></li>
        {womenUnderwearData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        {accessoriesData.map((item,index)=>{
          const isHeading = index === 0 ? " dropdown-menu__heading" : "";
          return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
        })}
        <li><MenuTab href="#" name="Sleep & Longue" src="/images/menu tabs/women clothing/pngegg.png" /></li>
      </ul>
  </div>
</div>
{/* ===============End==================== */}

{/* ==============Start===================== */}
<div className="btn-group col-12 dropend">
  <button type="button" className="btn rounded-0 dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
  <div className='d-flex'>
  <div><i className="fa-solid fa-child fa-lg text-secondary me-2"></i></div>
  <div>Men's Fashion</div>
  </div>
  </button>
  <div className="dropdown-menu side-menu">
    <ul>
    {hotSaleData.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    {bottomsDataMen.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    <li><MenuTab href="#" name="Summer Sale" src="/images/menu tabs/men clothing/tshirt.png" /></li>
    </ul>
    <ul>
    {outerwearJacketsData.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    {underwearLoungewearData.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    <li><MenuTab href="#" name="Beach Style" src="/images/menu tabs/men clothing/sport.png" /></li>
    </ul>
    <ul>
    {accessoriesDataMen.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    {noveltySpecialUseData.map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    <li><MenuTab href="#" name="Sleep & Longue" src="/images/menu tabs/men clothing/pants.png"/></li>
    </ul>
  </div>
</div>
{/* ===============End==================== */}

    </div>
  )
}

export default Menu
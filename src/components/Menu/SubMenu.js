import React from 'react'
import LinkButton from '../common/LinkButton';
import MenuTab from '../common/Menu/MenuTab';

const SubMenu = (menuHeading, data) => {
  return (
    <div className="btn-group col-12 dropend">
  <button type="button" className="btn rounded-0 dropdown-btn" data-bs-toggle="dropdown" aria-expanded="false">
  <div className='d-flex'>
  <div><i class="fa-solid fa-child fa-lg text-secondary me-2"></i></div>
  <div>{menuHeading}</div>
  </div>
  </button>
  <div className="dropdown-menu side-menu">
    <ul>
    {data[0].map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    {data[1].map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    <li><MenuTab href="#" name="Summer Sale" src="/images/menu tabs/men clothing/tshirt.png" /></li>
    </ul>
    <ul>
    {data[2].map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    {data[3].map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    <li><MenuTab href="#" name="Beach Style" src="/images/menu tabs/men clothing/sport.png" /></li>
    </ul>
    <ul>
    {data[4].map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    {data[5].map((item,index)=>{
      const isHeading = index === 0 ? " dropdown-menu__heading" : "";
      return <li key={index}><LinkButton name={item.name} className={"dropdown-item"+isHeading} to={item.to} /></li>
    })}
    <li><MenuTab href="#" name="Sleep & Longue" src="/images/menu tabs/men clothing/pants.png"/></li>
    </ul>
  </div>
</div>
  )
}

export default SubMenu
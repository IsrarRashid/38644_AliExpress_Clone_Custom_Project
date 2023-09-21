import React from 'react'
import { Link } from 'react-router-dom'

const MenuTab = ({name,src,to}) => {
  return (
    <Link to={to} className='menu-tab-link'>
      <div className='col-11 d-flex border border-1'>
      <div>
          <h6 className='m-2 menu-tab__heading'>{name}</h6>
      </div>
          <div className='menu-tab__image'><img className='img-fluid' src={src}/></div>
      </div>
    </Link>

  )
}

export default MenuTab
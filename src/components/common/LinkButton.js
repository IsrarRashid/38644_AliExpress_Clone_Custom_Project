import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({name, src, imgClassName, className,iconClassBefore,iconClassAfter, to}) => {
  return (
      <Link to={to} className={className}>
    <i className={iconClassBefore}></i>
        {name}
        <img src={src} className={imgClassName} />
    <i className={iconClassAfter}></i>
        </Link>
    )
  }

export default LinkButton
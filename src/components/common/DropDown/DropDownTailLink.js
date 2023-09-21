import React from 'react'

const DropDownTailLink = ({href, name}) => {
    return (
      <a className="dropdown-item" href={href}>
      {name}
      </a>
    )
  }

export default DropDownTailLink
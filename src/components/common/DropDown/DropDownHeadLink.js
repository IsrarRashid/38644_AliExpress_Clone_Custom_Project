import React from 'react'

const DropDownHeadLink = ({href, name, iconClass}) => {
    return (
      <a
      className="nav-link dropdown-toggle"
      data-bs-toggle="dropdown"
      href={href}
      role="button"
      aria-expanded="false"
      >
      <i className={iconClass}></i>
      {name}
      </a>
    )
  }

export default DropDownHeadLink
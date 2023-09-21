import React from 'react'

const CommonButton = ({buttonName,onClick, className}) => {
  return (
    <button
    onClick={onClick}
    className={className}

    >{buttonName}</button>
  )
}

export default CommonButton
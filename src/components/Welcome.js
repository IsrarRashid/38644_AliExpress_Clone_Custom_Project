import React from 'react'
import LinkButton from './common/LinkButton'

const Welcome = () => {
  return (
    <div className='bg-white rounded-3 p-3 text-center'>
        <div className='fw-bold'>Welcome to Ali Express</div>
        <br />
        <div className='d-flex justify-content-between'>
        <LinkButton to="/register" name="Join" className="btn btn-danger rounded-pill text-white col-4"  />
        <LinkButton to="/sign-in" name="Sign In" className="btn btn-light rounded-pill secondary border" />
        </div>
    </div>
  )
}

export default Welcome
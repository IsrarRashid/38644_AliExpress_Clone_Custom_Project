import React from 'react'

const Services = () => {
  return (
    <div className='services-tab row'>
        <ul className='list-group list-group-horizontal'>
            <li className='list-group-item d-flex pe-5 ps-5'>
            <div><i className="fa-solid fa-shield-halved fa-lg me-2 text-danger"></i></div>
            <span className='fw-bold'>Safe & reliable payments</span>
            </li>
            <li className='list-group-item d-flex pe-5 ps-5'>
            <div><i className="fa-solid fa-sack-dollar fa-lg me-2 text-danger"></i></div>
            <span className="fw-bold">Money Back Gurantee</span>
            </li>
            <li className='list-group-item d-flex pe-5 ps-5'>
            <div><i className="fa-sharp fa-solid fa-earth-americas fa-lg me-2 text-danger"></i></div>
            <span className="fw-bold">24/7 Customer Service</span>
            </li>
        </ul>
    </div>
  )
}

export default Services
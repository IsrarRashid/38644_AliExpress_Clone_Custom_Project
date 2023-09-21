import React from 'react'
import { Link } from 'react-router-dom'

const SingleProduct = ({data}) => {
  return (
    <div class="card">
  <img src={data.src} class="card-img-top img-fluid" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
  }

export default SingleProduct









// import React from 'react'
// import { Link } from 'react-router-dom'

// const SingleProduct = (to,src) => {
//   return (
//     <div>
//       <Link to={to} type="button" class="btn position-relative">
//             <img src={src} className="d-block img-fluid rounded-3" alt="..."/>
//               <span class="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
//             -75%
//             <span class="visually-hidden">unread messages</span>
//               </span>
//             </Link>
//     </div>
//   )
// }

// export default SingleProduct

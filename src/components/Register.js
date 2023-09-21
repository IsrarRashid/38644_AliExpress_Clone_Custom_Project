import React, { useState } from 'react'
import DataList from './common/DataList';

const Register = () => {
    const [display, setDisplay] = useState(true);

    const showHandler =()=>{
        setDisplay(false);
    }
    const hideHandler =()=>{
        setDisplay(true);
    }
  return (
    <div className='container'>
        <div className='row'>
        </div>
        <div className='row d-flex justify-content-center'>
        <div className='col-6 border border-3 rounded-3 m-5 p-5 bg-white'>
            <div className='text-center'>
                <button onClick={showHandler} className='btn btn-outline-primary me-3'>Register</button>
                <button onClick={hideHandler} className='btn btn-outline-success'>Sign In</button>
            </div>
            <form>
                {display && <DataList />}
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
              </div>
              <button type="submit" className="btn btn-primary">Create Account</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Register

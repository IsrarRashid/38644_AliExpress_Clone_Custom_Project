import React, { useState } from 'react'
import DataList from './common/DataList';
import LinkButton from "./common/LinkButton"
import shipTo from "./Navbar/consts/shipTo"

const SignIn = () => {
    const [display, setDisplay] = useState(false);

    const showHandler =()=>{
        setDisplay(true);

    }
    const hideHandler =()=>{
        setDisplay(false);
    }
  return (
    <div className='container'>
        <div className='row'>
        </div>
        <div className='row d-flex justify-content-center'>
        <div className='col-6 border border-3 rounded-3 m-3 p-3 bg-white shadow p-3 mb-5 bg-body'>
            <div className='text-center'>
                <button onClick={showHandler} className='btn btn-outline-primary me-3'>Register</button>
                <button onClick={hideHandler} className='btn btn-outline-success'>Sign In</button>
            </div>
            <form>
                {display && <DataList heading="Your Location" data={shipTo} />}
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
                {!display && <LinkButton name="Forgot Password" className="form-check-label" to="/" />}
              </div>
              <div className='text-center'><button type="submit" className="btn btn-primary">{display ? "Create Account" : "Sign In"}</button></div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default SignIn

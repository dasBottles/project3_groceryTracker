import React from 'react'
import '../Login/style.css'

const Login = () => {
    return (
        <div className="container">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
<div className="wet">
            <form>
              
                <div className="form-group">
                <h2>Log In to Smart Shopper!</h2>
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <small id="emailHelp" className="form-text  text-muted"></small>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
              </form>
              </div>
          </div>
    )
}

export default Login

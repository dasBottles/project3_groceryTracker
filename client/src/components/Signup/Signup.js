import React from 'react'
import '../Signup/style.css'

const Signup = () => {
    return (
      <div className="container">
      <br></br>
      <br></br>
      <br></br>
      <div className="soft">
        <div classsName="cannon">
            <form>
                <div className="form-group">
                  <h2>Sign Up for Smart Shopper Now!</h2>
                    <label for="firstName">First Name</label>
                    <input type="text" className="form-control" placeholder="" />
                    <br />
                    <label for="lastName">Last Name</label>
                    <input type="text" className="form-control" placeholder="" />
                  </div>
              </form>
            <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <small id="emailHelp" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-dark">Sign Up</button>
              </form>
              </div>
              </div>
          </div>
    )
}

export default Signup

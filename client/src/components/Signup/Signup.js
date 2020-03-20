import React from 'react'

const Signup = () => {
    return (
        <div className="container">
            <form>
                <div className="form-group">
                    <label for="firstName">First Name</label>
                    <input type="text" className="form-control" placeholder="Enter here" />
                    <br />
                    <label for="lastName">Last Name</label>
                    <input type="text" className="form-control" placeholder="Enter here" />
                  </div>
              </form>
            <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
              </form>
          </div>
    )
}

export default Signup

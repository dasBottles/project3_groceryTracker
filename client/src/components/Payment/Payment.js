import React, { useState } from 'react';

const Payment = () => {
    return (
        <div className="container">
 <div class="jumbotron text-center">
            <h1 class="display-4">Payment API</h1>
            <br>
            </br>
            <h3>Choose Your Payment Method</h3>
        </div>
        <div class="container">
            <form>
                <div class="form-group">
                  <label for="formGroupExampleInput">Credit Card</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Credit Card Information"></input>
                </div>
                <br>
                </br>
                <div class="form-group">
                  <label for="formGroupExampleInput2">Paypal Link</label>
                  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Input Paypal Link"></input>
                </div>
              </form>
          </div>
          <br></br>
          <div class="container text-center">
          <button type="submit" class="btn btn-primary">Submit</button>
      
        </div>
    </div>

    )
}

export default Payment;

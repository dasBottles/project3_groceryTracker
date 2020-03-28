import React, { useState } from 'react';
import '../Payment/style.css'

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
                <div class="form-groupz">
                  <label for="formGroupExampleInput">Credit Card</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Credit Card Information"></input>
                </div>
                <br>
                </br>
                <div class="form-groupz">
                  <label for="formGroupExampleInput2">Expiration Date</label>
                  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="MM/YY"></input>
                </div>
              </form>
          </div>
          <br></br>
          <button type="submit" class="btn btn-dark submit">Settle Grocery Bill</button> 
          <div class="container text-center">
      
        </div>
    </div>

    )
}

export default Payment;

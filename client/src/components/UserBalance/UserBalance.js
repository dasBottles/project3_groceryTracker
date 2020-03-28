import React, { useState } from 'react';
import '../UserBalance/style.css'

const UserBalance = () => {
    return (
<div className="container">
        <div class="jumbotron text-center">
        <h1 class="display1">Current Grocery Bill</h1>
        <br></br>
        <h2></h2>
    </div>
    <div class="wets">
        <div class="bill">$120.44</div>
        <br></br>
        <br></br>
        <br></br>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">$</span>
              <span class="input-group-text">Enter Amount</span>
            </div>
            <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"></input>
          </div>
     <br></br>
      <div class="container text-center">
      <button type="submit" class="btn btn-dark"> $ Amount to Send to Square!</button>
      </div>        
    </div>
</div>

    )
}

export default UserBalance;

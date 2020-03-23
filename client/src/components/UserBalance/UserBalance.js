import React, { useState } from 'react';

const UserBalance = () => {
    return (
<div className="container">
        <div class="jumbotron text-center">
        <h1 class="display-4">Smart Shopper</h1>
        <br></br>
        <h2>Current Individual Balance</h2>
    </div>
    <div class="container">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">$</span>
              <span class="input-group-text">Enter Amount Here</span>
            </div>
            <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)"></input>
          </div>
      <br></br>
      <div class="container text-center">
      <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
</div>

    )
}

export default UserBalance;

import React, { useState } from 'react';

const Receipt = () => {
    return (
        <div className="container">
        <div class="jumbotron text-center">
        <h1 class="display-4">Receipt Display for Joint Shopping List</h1>
        <h6> Group Total is _____  </h6>
   </div>
  <div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Person</th>
          <th scope="col">Total Due</th>
          <th scope="col">Total Paid </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">______</th>
          <td>______</td>
          <td>______</td>
        </tr>
        <tr>
          <th scope="row">______</th>
          <td>______</td>
          <td>______</td>
        </tr>
        <tr>
<th scope="row">______</th>
          <td>______</td>
          <td>______</td>
        </tr>
       
      </tbody>
    </table>
    </div>
    <div>
      <button type="button" class="btn btn-secondary btn-lg btn-block">Take me to Venmo!</button>
      </div>
    </div>
    )
}

export default Receipt;

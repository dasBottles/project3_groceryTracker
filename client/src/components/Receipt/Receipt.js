import React, { useState } from 'react';

const Receipt = () => {
    return (
        <div className="container">
        <div class="jumbotron text-center">
        <h1 class="display-4">Receipt Display for Whole Group!</h1>
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
        <h6> Group Total is _____  </h6>
    </div>
    <div>

      </div>
    </div>
    )
}

export default Receipt;

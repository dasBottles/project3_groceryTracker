import React, { useState } from 'react';
import '../UserList/style.css'

const UserList = () => {
    return (
        <div className="container">
<div class="jumbotron text-center">
  <div></div>
          <h1 class="display-3">Grocery List</h1>
     </div>
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Food Item</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total Amount</th>
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

        <button type="button" class="btn btn-secondary btn-lg btn-block">Take me to Venmo!</button>

        </div>

    )
}

export default UserList;

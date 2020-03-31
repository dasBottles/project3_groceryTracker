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
            <th scope="row">Avocados</th>
            <td>8</td>
            <td>$12.00</td>
          </tr>
          <tr>
            <th scope="row">Frozen Fries</th>
            <td>1</td>
            <td>$3.99</td>
          </tr>
          <tr>
            <th scope="row">Eggs</th>
            <td>1</td>
            <td>$2.99</td>
          </tr>
          <tr>
            <th scope="row">Lobster</th>
            <td>1</td>
            <td>$18.99</td>
          </tr>
          <tr>
            <th scope="row">Waffle Mix</th>
            <td>1</td>
            <td>$1.99</td>
          </tr>
          <tr>
            <th scope="row">Rice</th>
            <td>1</td>
            <td>$2.99</td>
          </tr>
          <tr>
          <th scope="row">Bags of Coffee</th>
            <td>2</td>
            <td>$8.00</td>
          </tr>
        </tbody>
      </table>
      </div>

        <button type="button" class="btn btn-secondary btn-lg btn-block">Take me to Venmo!</button>

        </div>

    )
}

export default UserList;

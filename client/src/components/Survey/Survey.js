import React, { useState } from 'react';
import '../Survey/style.css'

const Survey = () => {
    return (
        <div className="container">
<div class="jumbotron text-center">
            <h1 class="display">How Many Splitting Groceries?</h1>
        </div>
        <div class="container">
            <form>
                <div class="dropdown">
                    <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    How many people?
                    </button>
                    <br>
                    </br>
                    <br>
                    </br>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">One (self)</a>
                      <a class="dropdown-item" href="#">Two</a>
                      <a class="dropdown-item" href="#">Three</a>
                      <a class="dropdown-item" href="#">Two</a>

                    </div>
                  </div>
                  <div className="dill">
                <div class="form-group">
                  <label for="exampleInputPassword1"> Food Item</label>
                  <input type="password" class="form-control" id="exampleInputPassword1"></input>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Quantity</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"></input>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Person's Name</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"></input>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Total Amount</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"></input>
                  </div>
                <button type="submit" class="btn btn-dark">Submit</button>
          </div>
              </form>
          </div>
        </div>

    )
}

export default Survey;

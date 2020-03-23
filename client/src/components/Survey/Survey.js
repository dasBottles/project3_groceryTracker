import React, { useState } from 'react';

const Survey = () => {
    return (
        <div className="container">
<div class="jumbotron text-center">
            <h1 class="display-4">Fill out the survey below to compute the apporpriate data</h1>
        </div>
        <div class="container">
            <form>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    How many people?
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">One (self)</a>
                      <a class="dropdown-item" href="#">Two</a>
                      <a class="dropdown-item" href="#">Three</a>
                      <a class="dropdown-item" href="#">Two</a>

                    </div>
                  </div>
                  
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
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
          </div>
        </div>

    )
}

export default Survey;

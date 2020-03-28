import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import ShoppingList from './components/ShoppingList/ShoppingList'
import UserBalance from './components/UserBalance/UserBalance';
import UserList from './components/UserList/UserList';
import Receipt from './components/Receipt/Receipt';
import Payment from './components/Payment/Payment';
import SettleNow from './components/SettleNow/SettleNow';
import Survey from './components/Survey/Survey';
import items from './components/Items/items';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/list' component={items} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/userbalance' component={UserBalance} />
          <Route exact path='/userlist' component={UserList} />
          <Route exact path='/shoppingcart' component={ShoppingList} />
          <Route exact path='/receipt' component={Receipt} />
          <Route exact path='/payment' component={Payment} />
          <Route exact path='/settlenow' component={SettleNow} />
          <Route exact path='/survey' component={Survey} />  
        </Switch>
      </div>
    </Router>
  );
}

export default App;

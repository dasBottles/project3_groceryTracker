import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import ShoppingList from './components/ShoppingList/ShoppingList'


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/shoppingcart' component={ShoppingList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

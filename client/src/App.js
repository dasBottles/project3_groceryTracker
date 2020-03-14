import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from './components/Jumbotron/Jumbotron';
import Navbar from './components/Navbar/Navbar'
import ShoppingList from './components/ShoppingList/ShoppingList'


function App() {
  return (
    <div className='container'>
      <Navbar />
      <Jumbotron />
      <ShoppingList />
    </div>
  );
}

export default App;

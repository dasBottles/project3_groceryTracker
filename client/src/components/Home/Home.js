import React from 'react'
import Navbar from '../Navbar/Navbar';
import ShoppingList from '../ShoppingList/ShoppingList'
import Jumbotron from '../Jumbotron/Jumbotron'


const Home = () => {
    return (
        <div className='container'>
            <Jumbotron />
            <ShoppingList />
        </div>
    )
}

export default Home

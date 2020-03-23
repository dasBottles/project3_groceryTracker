import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Smart Shopper <span className="sr-only">(current)</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <a 
            className="nav-item nav-link" 
            href="/signup">Sign Up
            </a>
            <a className="nav-item nav-link" href="/login">Login</a>
            <a className="nav-item nav-link" href="/survey">Survey</a>
            <a className="nav-item nav-link" href="/userbalance">User Balance</a>
            <a className="nav-item nav-link" href="/userlist">User Lists</a>
            <a className="nav-item nav-link" href="/shoppingcart">Shopping Cart</a>
            <a className="nav-item nav-link" href="/receipt">Receipts</a>
            <a className="nav-item nav-link" href="/settlenow">Settle Now</a>
            <a className="nav-item nav-link" href="/payment">Payment</a>
            </div>
        </div>
    </nav>
    )
}

export default Navbar

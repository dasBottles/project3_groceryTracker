import React from 'react'
import '../Jumbotron/style.css'

const style = {
    margin: '2.5px'
};

const Jumbotron = () => {
    return (
        <div className="jumbotron text-center">
            <h1 className="display-4">Smart Shopper</h1>
                <p className="lead">The smartest way to shop for groceries with friends, family and groups who have to share food!</p>
           
            <a className="btn1 btn-dark btn-lg" style={style} href="/login" role="button">Log In</a>
            <i className="fas fa-cart-arrow-down fa-10x"></i>
               <br></br>
            <a className="btn2 btn-dark btn-lg" style={style} href="/signup" role="button">Sign Up</a>

        </div>
    )
}

export default Jumbotron

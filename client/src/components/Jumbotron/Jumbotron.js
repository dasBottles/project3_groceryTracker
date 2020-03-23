import React from 'react'

const style = {
    margin: '2.5px'
};

const Jumbotron = () => {
    return (
        <div className="jumbotron text-center">
            <h1 className="display-4">Smart Shopper</h1>
                <p className="lead">Welcome to Smart Shopper, the smartest way to shop for groceries with friends, family and groups who have to share food!</p>
            <hr className="my-4" />
                <p>Let Smart Shopper settle your grocery bills for you!</p>
            <a className="btn btn-primary btn-lg" style={style} href="/login" role="button">Log In</a>
            <a className="btn btn-primary btn-lg" style={style} href="/signup" role="button">Sign Up</a>
        </div>
    )
}

export default Jumbotron

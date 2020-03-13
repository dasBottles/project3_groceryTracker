import React from 'react'

const style = {
    margin: '2.5px'
};

const Jumbotron = () => {
    return (
        <div className="jumbotron text-center">
            <h1 className="display-4">Smart Shopper</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" style={style} href="#" role="button">Log In</a>
            <a className="btn btn-primary btn-lg" style={style} href="#" role="button">Sign Up</a>
        </div>
    )
}

export default Jumbotron

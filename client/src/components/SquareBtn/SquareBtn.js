import React from 'react'
import './style.css'

const SquareBtn = () => {
    return (
    <div id="form-container">
        <div id="sq-card-number"></div>
        <div className="third" id="sq-expiration-date"></div>
        <div className="third" id="sq-cvv"></div>
        <div className="third" id="sq-postal-code"></div>
        <button id="sq-creditcard" className="button-credit-card" onclick="onGetCardNonce(event)">Pay $1.00</button>
    </div>
    )
}

export default SquareBtn

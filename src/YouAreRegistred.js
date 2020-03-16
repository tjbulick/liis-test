import React from 'react';
import './YouAreRegistred.css';

const YouAreRegistred = (props) => {
    return (
        <div className="you-are-registred">
            <h1>You are successfully registred!</h1>
            <h3>Your unique ID in Firebase is {props.id}</h3>
        </div>
    )
}

export default YouAreRegistred;
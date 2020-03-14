import React from 'react';
import './RegisterButton.css';

const RegisterButton = (props) => {
    return (
        <button className="register-button" type="submit" onClick={props.onSubmit}>Register</button>
    )
}

export default RegisterButton;
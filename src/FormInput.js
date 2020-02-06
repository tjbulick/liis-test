import React from 'react';

function FormInput(props) {
    return (
        <div>
            <span className="input-label">{props.label}</span>
            <br/>
            <input type="text" className="form-input"/>
        </div>
    )
}

export default FormInput;
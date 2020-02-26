import React from 'react';
import './FormInput.css';

function FormInput(props) {
    return (
        <div>
            <span className="input-label">{props.label}</span>
            <br/>
            <input type="text" value={props.value} className="form-input" name={props.name} onChange={props.onChange} />
        </div>
    )
}

export default FormInput;
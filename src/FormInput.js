import React from 'react';
import './FormInput.css';

const FormInput = (props) => {
    return (
        <div className="input-block">
            <span className="input-label">{props.label}</span>
            <br/>
            <input type="text" value={props.value} className="form-input" name={props.name} onChange={props.onChange} />
        </div>
    )
}

export default FormInput;
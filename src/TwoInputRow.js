import React from 'react';
import './TwoInputRow.css';

const TwoInputRow = (props) => {
    return (
        <div className="two-input-row">
            {props.children}
        </div>
    )
}

export default TwoInputRow;
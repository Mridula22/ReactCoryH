import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id} name={props.name} type={props.type} value={props.value} onChange={props.onChange}></input>
        </div>
    )
}

Input.propTypes ={
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["text", "number", "email", "phone"]),
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}


export default Input;
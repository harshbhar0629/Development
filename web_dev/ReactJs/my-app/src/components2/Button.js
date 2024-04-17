import './Button.css'
import React, {useState} from 'react';

function Button(props) {

    // it returns {variable-value, update function for this value}
    let [title, setTitle]= useState(props.text);

    function clickHandler() {
        setTitle("popCorn");
        console.log("Add in your cart");
    }

    return (
        <button onClick={clickHandler} className="btn">{ title}</button>
    );
}

export default Button;
import React, { useState } from 'react';
import './ItemName.css'

function ItemName(props) {
    return (
        <div>
            <div className="name">
                {props.name}
            </div>
        </div>
    );
}

export default ItemName;
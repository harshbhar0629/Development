import { useState } from 'react';

function Card(props) {
    const [readmore, setReadmore] = useState(false);
    const desc = readmore? props.info: `${props.info.substr(0, 200)}...`;
    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return (
        
        <div className='card'>
            {/* card represent a single entity for an individual card */}
            <img src={props.image} className='image'></img>
            <div className='tour-info'>
                <div className='tour-details'>
                    <h4 className='tour-price'>
                        ₹ {props.price}
                    </h4>
                    <h4 className='tour-name'>
                        {props.name}
                    </h4>
                </div>

                <div className='description'>
                    {desc}
                    <span className='read-more' onClick={readmoreHandler}>
                        {readmore? ` Show less`: ` Read more`}
                    </span>
                </div>
            </div>
            <button className='btn-not-interested' onClick={ () => props.removeTour(props.id)}>
                Not Interested
            </button>
        </div>
    ); 
}

export default Card;
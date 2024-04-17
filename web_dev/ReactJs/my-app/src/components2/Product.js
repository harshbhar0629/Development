import './Product.css'
import { useState } from 'react';

function Product() {

    let [title, setTitle] = useState('');
    let [date, setDate] = useState('');

    function newItemHandler(event) {
        setTitle(event.target.value);
        console.log(event.target.value);
    }

    function dateHandler(event) {
        setDate(event.target.value);
        console.log(event.target.value);
        console.log(event)
    }

    return (
        <form className='form'>
            <div className='title'>
                <label>
                    Title
                </label>
                <input onChange={newItemHandler} type="text" placeholder='Enter Product'></input>
            </div>
            <div className='divi'>
                <div onChange={dateHandler} className='date'>
                    <label>Date</label>
                    <input type='date'></input>
                </div>
                <button type='submit' className='btn1'>Add New Item</button>
            </div>
        </form>
    )
}

export default Product;
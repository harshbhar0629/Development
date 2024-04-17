import './Product.css'
import { useState } from 'react';

function Product() {

    // handling multi state at a time 
    let [pdt, setPdt] = useState({
        title: '',
        date: ''
    });
    


    // let [title, setTitle] = useState('');
    // let [date, setDate] = useState('');
    //  single function handle single state
    function newItemHandler(event, prev) {
        let obj = { ...prev, title: event.target.value };
        console.log(obj);
        return obj;
        // setTitle(event.target.value);
        // console.log(event.target.value);
    }

    function dateHandler(event, prev) {
        let obj = { ...prev, date: event.target.value };
        console.log(obj);
        return obj;
        // setDate(event.target.value);
        // console.log(event.target.value);
        // console.log(event);
        // console.log(date);
        // console.log(title);
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
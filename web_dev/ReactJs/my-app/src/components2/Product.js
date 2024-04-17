import './Product.css'
import { useState } from 'react';
import ItemDate from './ItemDate';
import ItemName from './ItemName';
import Button from './Button';

function Product(props) {

    // handling multi state at a time 
    // let [pdt, setPdt] = useState({
    //     title: '',
    //     date: ''
    // });
    


    let [title, setTitle] = useState('');
    let [date, setDate] = useState('');
    //  single function handle single state
    function newItemHandler(event, prev) {
        // let obj = { ...prev, title: event.target.value };
        // console.log(obj);
        // return obj;

        setTitle(event.target.value);
        // console.log(event.target.value);
    }

    function dateHandler(event, prev) {
        // let obj = { ...prev, date: event.target.value };
        // console.log(obj);
        // return obj;
       
        setDate(event.target.value);
        // console.log(event.target.value);
        // console.log(event);
        // console.log(date);
        // console.log(title);
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log(event);

        // let date = event.target[1].value;
        // let text = event.target[0].value;
        // let [year, month, day] = date.split('-');
        // // console.log(year, month, day);
        // return (
        //     <div className="items">
        //         <ItemDate date={day} month={month} year={year}></ItemDate>
        //         <ItemName name={text}></ItemName>
        //         <Button text="Add To Cart"></Button>
        //     </div>
        // )


        // another way to do this..
        let newPdt = {
            title: title,
            date: date
        };
        props.onSavePdt(newPdt);
        // console.log(newPdt);
        setDate('');
        setTitle('');
    }

    return (
        <form className='form' onSubmit={submitHandler}>
            <div className='title'>
                <label>
                    Title
                </label>
                <input onChange={newItemHandler} type="text" value={title}  placeholder='Enter Product'></input>
            </div>
            <div className='divi'>
                <div className='date'>
                    <label>Date</label>
                    <input onChange={dateHandler}
                    value={date} type='date'></input>
                </div>
                <button type='submit' className='btn1'>Add New Item</button>
            </div>
        </form>
    )
}

export default Product;

// <div className="items">
//     <ItemDate date="21" month="September" year="2021"></ItemDate>
//     <ItemName name="Nirma"></ItemName>
//     <Button text="Add To Cart"></Button>
// </div>
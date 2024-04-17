import './Product.css'

function Product() {
    return (
        <form className='form'>
            <div className='title'>
                <label>
                    Title
                </label>
                <input type="text" placeholder='Enter Product'></input>
            </div>
            <div className='divi'>
                <div className='date'>
                    <label>Date</label>
                    <input type='date'></input>
                </div>
                <button type='submit' className='btn1'>Add New Item</button>
            </div>
        </form>
    )
}

export default Product;
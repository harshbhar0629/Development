import './NewProduct.css'
import Product from './Product';

function NewProduct(props) {
    function savePdt(data) {
        console.log("i'm inside pdt");
        props.printData(data);
    }
    return (
        <div className='new-pdt'>
            <Product onSavePdt={savePdt}></Product>
        </div>
    )
}

export default NewProduct;
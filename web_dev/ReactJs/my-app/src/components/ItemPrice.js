import './ItemPrice.css'

function ItemPrice(props) {
    const price = props.price;
    return (<p className="price">{price}</p>);
}

export default ItemPrice;
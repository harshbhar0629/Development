import './ItemName.css'

function ItemName(props) {
    return (
        <div className="name">
            {props.name}
        </div>
    );
}

export default ItemName;
import './item.css'
function SoapItems(props) {
    let name = props.name;
    return (
        <p className="nirma">{name}</p>
    );
}

export default SoapItems;
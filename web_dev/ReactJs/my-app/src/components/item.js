import './item.css'
function SoapItems(props) {
    let name = props.name;
    return (
        <div>
            <p className="nirma">{name}</p>
            { props.children }
        </div>
    );
}

export default SoapItems;
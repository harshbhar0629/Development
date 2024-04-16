import './ItemDate.css'

function ItemDate(props) {
    return (
        <div className="mfg-date">
            <p className="date">{props.date}</p>
            <p className="month">{props.month}</p>
            <p className="year">{props.year}</p>
        </div>
    )
}

export default ItemDate;
import './Button.css'

function Button(props) {
    return (<button className="btn">{props.text}</button>);
}

export default Button;
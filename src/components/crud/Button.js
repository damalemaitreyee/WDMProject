import './crud.css'
const Button = ({ color, text, onClick }) => {
    return( <div className="buildings"><button onClick={onClick} style={{ backgroundColor: color }} className="btn">{text}</button></div>)
}

export default Button

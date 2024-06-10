import './button.css'

const Button = (props) => {
    return (
        <button className="button">{props.btnName}</button>
    )
}

export default Button
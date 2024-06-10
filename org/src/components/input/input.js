import './input.css'

const Input = (props) => {

    const handleInputChange = (e) => {
        props.updateInputValue(e.target.value);
    }

    const { type = 'text' } = props

    return (
        <div className={`input input__${type}`}>
            <label htmlFor="name">{props.label}</label>
            <input
                type={type}
                placeholder={props.placeholder}
                required={props.required}
                value={props.value}
                onChange={handleInputChange}
            />
            {props.showErrorMessage && <span className='error__message'>{props.errorMessage}</span>}
        </div>
    )
}

export default Input
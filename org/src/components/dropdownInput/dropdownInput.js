import './dropdownInput.css'

const DropDownInput = (props) => {

    const handleOptionChange = (e) => {
        props.updateDropValue(e.target.value);
    }

    return (
        <div className="dropdown__list">
            <label htmlFor="">Equipos</label>
            <select value={props.value} onChange={handleOptionChange}>
                <option value={''} disabled defaultValue={''} hidden>Seleccionar equipo</option>
                {props.teams.map((team, index) => <option key={index} value={team}> {team} </option>)}
            </select>
            {props.showErrorMessage && <span className='error__message'>{props.errorMessage}</span>}
        </div>
    )
}

export default DropDownInput
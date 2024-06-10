import { useState } from "react";
import { validations } from "../../utils/validations.js";
import Button from '../button/button'
import DropDownInput from '../dropdownInput/dropdownInput'
import Input from "../input/input";
import './form.css'

const Form = (props) => {

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [photo, setPhoto] = useState('');
    const [team, setTeam] = useState('');

    const [title, setTitle] = useState('');
    const [secondaryColor, setSecondaryColor] = useState('');

    const [showErrorMessageName, setShowErrorMessageName] = useState(false)
    const [errorMessageName, setErrorMessageName] = useState('Error message')
    const [showErrorMessagePosition, setShowErrorMessagePosition] = useState(false)
    const [errorMessagePosition, setErrorMessagePosition] = useState('Error message')
    const [showErrorMessagePhoto, setShowErrorMessagePhoto] = useState(false)
    const [errorMessagePhoto, setErrorMessagePhoto] = useState('Error message')
    const [showErrorMessageTeam, setShowErrorMessageTeam] = useState(false)
    const [errorMessageTeam, setErrorMessageTeam] = useState('Error message')


    const [showErrorMessageTeamColor, setShowErrorMessageTeamColor] = useState(false)
    const [errorMessageTeamColor, setErrorMessageTeamColor] = useState('Error message')
    const [showErrorMessageColor, setShowErrorMessageColor] = useState(false)
    const [errorMessageColor, setErrorMessageColor] = useState('Error message')

    const [partnerDataValid, setPartnerDataValid] = useState(false)
    const [teamDataValid, setTeamDataValid] = useState(false)

    const { onSubmitAction, onSubmitTeamForm } = props;

    const ERROR_EMPTY = '¡Este es un campo obligatorio!'

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validations.validateEmptyFields(name)) {
            setErrorMessageName(ERROR_EMPTY);
            setShowErrorMessageName(true);
            setPartnerDataValid(false)
        } else {
            setShowErrorMessageName(false);
            setPartnerDataValid(true)
        }

        if (validations.validateEmptyFields(position)) {
            setErrorMessagePosition(ERROR_EMPTY);
            setShowErrorMessagePosition(true);
            setPartnerDataValid(false)
        } else {
            setShowErrorMessagePosition(false);
            setPartnerDataValid(true)
        }

        if (validations.validateEmptyFields(photo)) {
            setErrorMessagePhoto(ERROR_EMPTY);
            setShowErrorMessagePhoto(true);
            setPartnerDataValid(false)
        } else if (validations.urlStartsWithHTTPS(photo)) {
            setErrorMessagePhoto('¡La URL debe empezar con el patron "https://"!');
            setShowErrorMessagePhoto(true);
            setPartnerDataValid(false)
        } else {
            setShowErrorMessagePhoto(false);
            setPartnerDataValid(true)
        }

        if (validations.validateEmptyFields(team)) {
            setErrorMessageTeam(ERROR_EMPTY)
            setShowErrorMessageTeam(true)
            setPartnerDataValid(false)
        } else {
            setShowErrorMessageTeam(false)
            setPartnerDataValid(true)
        }

        if (partnerDataValid) {
            const data = {
                name,
                position,
                photo,
                team,
            };
            onSubmitAction(data);
            setPartnerFormEmpty()
            alert('¡Colaborador agregado con exito!')
        }
    };

    const handleSubmitTeam = (e) => {
        e.preventDefault();

        if (validations.validateEmptyFields(title)) {
            setErrorMessageTeamColor(ERROR_EMPTY);
            setShowErrorMessageTeamColor(true);
            setTeamDataValid(false);
        } else {
            setTeamDataValid(true);
            setShowErrorMessageTeamColor(false);
        }

        if (validations.validateEmptyFields(secondaryColor)) {
            setErrorMessageColor(ERROR_EMPTY);
            setShowErrorMessageColor(true);
            setTeamDataValid(false);
        } else {
            setShowErrorMessageColor(false);
            setTeamDataValid(true);
        }

        if (teamDataValid) {
            onSubmitTeamForm({
                title,
                secondaryColor
            });
            setTeamFormEmpty()
            alert('¡Equipo agregado con exito!')
        }
    }

    const setPartnerFormEmpty = () => {
        setName('')
        setPosition('')
        setPhoto('')
        setTeam('')
    }
    const setTeamFormEmpty = () => {
        setSecondaryColor('')
        setTitle('')
    }

    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Input
                    label="Nombre"
                    placeholder="Ingresar nombre"
                    value={name}
                    updateInputValue={setName}
                    errorMessage={errorMessageName}
                    showErrorMessage={showErrorMessageName}
                />
                <Input
                    label="Puesto"
                    placeholder="Ingresar puesto"
                    value={position}
                    updateInputValue={setPosition}
                    errorMessage={errorMessagePosition}
                    showErrorMessage={showErrorMessagePosition}
                />
                <Input
                    label="Foto"
                    placeholder="Ingresar enlace de foto"
                    value={photo}
                    updateInputValue={setPhoto}
                    errorMessage={errorMessagePhoto}
                    showErrorMessage={showErrorMessagePhoto}
                />
                <DropDownInput
                    value={team}
                    updateDropValue={setTeam}
                    teams={props.teams}
                    errorMessage={errorMessageTeam}
                    showErrorMessage={showErrorMessageTeam}
                />
                <Button btnName="Crear" />
            </form>
            <form onSubmit={handleSubmitTeam}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                <Input
                    label="Nombre del equipo"
                    placeholder="Ingresar nombre del equipo"
                    value={title}
                    updateInputValue={setTitle}
                    errorMessage={errorMessageTeamColor}
                    showErrorMessage={showErrorMessageTeamColor}
                />
                <Input
                    label="Color"
                    placeholder="Ingresar el color en Hex"
                    value={secondaryColor}
                    updateInputValue={setSecondaryColor}
                    type='color'
                    errorMessage={errorMessageColor}
                    showErrorMessage={showErrorMessageColor}
                />
                <Button btnName="Registrar equipo" />
            </form>
        </section>
    )
}

export default Form
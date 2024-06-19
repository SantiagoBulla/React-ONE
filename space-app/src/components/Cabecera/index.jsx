import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`
function Cabecera({ filtrarByText }) {
    return (
        <HeaderEstilizado>
            <img src="/img/logo.png" alt="Logo Space App" />
            <CampoTexto filtrarByText={filtrarByText} />
        </HeaderEstilizado>)
}

export default Cabecera
import styled from "styled-components"
import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import Imagen from "./Imagen"

const GaleriaContainer = styled.div`
    display: flex;
`

const SeccionFluida = styled.section`
    flex-grow: 1;
    margin-right: 25px;
`
const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({ fotos = [], alSeleccionarFoto, alAlternarFavorito, filtrarByTag }) => {
    return (
        <>
            <Tags filtrarByTag={filtrarByTag} />
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>Navegue por la galeria</Titulo>
                    <ImagenesContainer>
                        {fotos.map(foto => {
                            return <Imagen
                                key={foto.id}
                                foto={foto}
                                alSolicitarZoom={alSeleccionarFoto}
                                alAlternarFavorito={alAlternarFavorito}
                            />
                        })}
                    </ImagenesContainer>

                </SeccionFluida>
                <Populares>

                </Populares>
            </GaleriaContainer>
        </>
    )
}

export default Galeria
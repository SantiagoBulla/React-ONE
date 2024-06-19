import { useState, useEffect } from "react";
import styled from 'styled-components'
import GlobalStyles from './components/GlobalStyles'
import Cabecera from './components/Cabecera'
import BarraLateral from './components/BarraLateral'
import Banner from './components/Banner'
import banner from "./assets/banner.png"
import Galeria from './components/Galeria'
import fotos from './fotos.json';
import ModalZoom from "./components/ModalZoom";
import Pie from "./components/Pie"

const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`
const AppContainer = styled.div`
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
`
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`
const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {

  const [fotosGaleria, setFotosGaleria] = useState(fotos)
  const [fotoSelecciona, setFotoSeleccionada] = useState(null)
  const [tagFilter, setTagFilter] = useState(0)
  const [textFilter, setTextFilter] = useState("")

  const alAlternarFavorito = (foto) => {

    if (foto.id === fotoSelecciona?.id) {
      setFotoSeleccionada({
        ...fotoSelecciona,
        favorita: !foto.favorita
      })
    }

    setFotosGaleria(fotosGaleria.map(fotoDeGaleria => {
      return {
        ...fotoDeGaleria,
        favorita: fotoDeGaleria.id === foto.id ? !fotoDeGaleria.favorita : fotoDeGaleria.favorita
      }
    }))
  }

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tagFilter || foto.tagId === tagFilter;
      const filtroPorTitulo = !textFilter || foto.titulo.toLowerCase().includes(textFilter.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    setFotosGaleria(fotosFiltradas)
  }, [tagFilter, textFilter])


  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabecera filtrarByText={setTextFilter} />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner texto="La galería más completa de fotos del espacio" backgroundImage={banner} />
              <Galeria
                alSeleccionarFoto={foto => setFotoSeleccionada(foto)}
                fotos={fotosGaleria}
                alAlternarFavorito={alAlternarFavorito}
                filtrarByTag={setTagFilter}
              />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <Pie />
        <ModalZoom
          foto={fotoSelecciona}
          alCerrar={() => setFotoSeleccionada(null)}
          alAlternarFavorito={alAlternarFavorito}
        />
      </FondoGradiente>
    </>
  )
}

export default App

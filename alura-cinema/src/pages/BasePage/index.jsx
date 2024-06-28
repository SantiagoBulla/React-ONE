import { Outlet } from 'react-router-dom'
import FavoritosProvider from "../../context/Favoritos"
import Pie from "../../components/Pie/Pie"
import Cabecera from "../../components/Cabecera/Cabecera"

const BasePage = () => {
    return (
        <main>
            <Cabecera />
            <FavoritosProvider>
                <Outlet />
            </FavoritosProvider>
            <Pie />
        </main>
    )
}

export default BasePage
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Favoritos from './pages/Favoritos'
import Inicio from './pages/Inicio'
import Player from "./pages/Player"
import NotFound from './pages/NotFound'
import BasePage from './pages/BasePage'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<BasePage />} >
                    <Route index element={<Inicio />} />
                    <Route path='favoritos' element={<Favoritos />} />
                    <Route path=':id' element={<Player />} />
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
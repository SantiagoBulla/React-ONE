import { useEffect, useState } from "react";
import { useFavoritosContext } from "../../context/Favoritos";
import { useWindowSize } from 'react-use';
import Banner from "../../components/Banner/index"
import Titulo from "../../components/Titulo"
import Card from "../../components/Card";
import styles from './Favoritos.module.css';

const Favoritos = () => {

    const { favorito } = useFavoritosContext()
    const { width } = useWindowSize();
    const [screenSize, setScreenSize] = useState('favoritos-movil')

    useEffect(() => {
        if (width >= 1280) {
            setScreenSize('favoritos');
        } else if (width >= 800 && width <= 1279) {
            setScreenSize('favoritos-tablet');
        } else {
            setScreenSize('favoritos-movil');
        }
    }, [width])

    return (
        <>
            <Banner img={screenSize} color='#154580' />
            <Titulo>
                <h1>Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>

        </>
    )
}

export default Favoritos
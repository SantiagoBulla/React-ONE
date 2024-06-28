import { Link } from 'react-router-dom';
import { useFavoritosContext } from '../../context/Favoritos';
import styles from './Card.module.css';
import favorite_icon from './favorite_icon.png';
import unfavorite_icon from './unfavorite_icon.png';

const Card = ({ id, titulo, capa }) => {

    const { favorito, agregarFavorito } = useFavoritosContext();
    const isFavorito = favorito.some((fav) => fav.id === id);
    const icon = isFavorito ? favorite_icon : unfavorite_icon;

    return (
        <div className={styles.container}>
            <Link to={`/${id}`} className={styles.link}>
                <img src={capa} alt={titulo} className={styles.capa} />
            </Link>
            <section className={styles.container__info}>
                <h2>{titulo}</h2>
                <img src={icon} alt="favorite-icon" onClick={() => agregarFavorito({ id, titulo, capa })} />
            </section>
        </div>
    )
}

export default Card
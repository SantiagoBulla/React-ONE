import styles from "./Cabecera.module.css";
import { Link } from 'react-router-dom';
import logo from './logo-alura.png'
import CabeceraLink from "../CabeceraLink/CabeceraLink";

const Cabecera = () => {
    return (
        <header className={styles.cabecera}>
            <section className={styles.container}>
                <Link to='/'>
                    <section className={styles.logoContainer}>
                        <img src={logo} alt="logo-alura" /><span>Cinema</span>
                    </section>
                </Link>
                <nav className={styles.navContainer}>
                    <CabeceraLink url='/'>
                        Home
                    </CabeceraLink>
                    <CabeceraLink url='/Favoritos'>
                        Favoritos
                    </CabeceraLink>
                </nav>
            </section>
        </header>
    )
}

export default Cabecera
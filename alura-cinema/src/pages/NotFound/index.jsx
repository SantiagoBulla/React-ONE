import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <section className={styles.container}>
                <h2 className={styles.error}>404</h2>
                <span>Página no encontrada</span>
        </section>
    )
}

export default NotFound
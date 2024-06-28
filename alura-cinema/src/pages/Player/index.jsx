import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import Banner from "../../components/Banner/index"
import Titulo from "../../components/Titulo"
import Container from '../../components/Container';
import NotFound from '../../pages/NotFound';
import styles from './Player.module.css';

const Player = () => {

    const { width } = useWindowSize();
    const [video, setVideo] = useState([])
    const [screenSize, setScreenSize] = useState('player-movil')

    const parametros = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/videos?id=${parametros.id}`)
            .then(response => response.json())
            .then(data => setVideo(...data))
    }, [])

    useEffect(() => {
        if (width >= 1280) {
            setScreenSize('player');
        } else if (width >= 720 && width <= 1279) {
            setScreenSize('player-tablet');
        } else {
            setScreenSize('player-movil');
        }
    }, [width])

    //const video = videos.find(video => video.id === Number(parametros.id))

    if (!video) {
        return <NotFound />
    } else {
        return (
            <>
                <Banner img={screenSize} color='#58B9AE' />
                <Titulo>
                    <h1>Player</h1>
                </Titulo>
                <Container>
                    <iframe
                        src={video.link}
                        title={video.titulo}
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </Container>
            </>
        )
    }
}

export default Player
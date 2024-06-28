import { useEffect, useState } from "react";
import { useWindowSize } from 'react-use';
import Banner from "../../components/Banner/index"
import Titulo from "../../components/Titulo"
import Card from "../../components/Card"
import Container from "../../components/Container";

const Inicio = () => {

    const { width } = useWindowSize();
    const [videos, setVideos] = useState([])
    const [screenSize, setScreenSize] = useState('home-movil')

    useEffect(() => {
        fetch('http://localhost:3000/videos')
            .then(response => response.json())
            .then(data => setVideos(data))
    }, [])

    useEffect(() => {
        if (width >= 1280) {
            setScreenSize('home');
        } else if (width >= 800 && width <= 1279) {
            setScreenSize('home-tablet');
        } else {
            setScreenSize('home-movil');
        }
    }, [width])

    return (
        <>
            <Banner img={screenSize} color='#154580' />
            <Titulo>
                <h1>Un lugar para guardar tus videos favoritos</h1>
            </Titulo>
            <Container>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </Container>
        </>
    )
}

export default Inicio
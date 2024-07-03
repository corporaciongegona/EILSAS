import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'

import './home.css'
import logoWhite from '../../assets/logo_white_alta.png'
import wines from '../../assets/wines.jpg'
import bottles from '../../assets/botellas1.png'
import vinedoGrande from '../../assets/vinedo_grande.jpg'
import portadaUno from '../../assets/portadaUno.jpg'

//Import slider
import one from '../../assets/gp.jpg'
import two from '../../assets/jamel.jpg'
import three from '../../assets/pink.jpg'
import four from '../../assets/vino_berdugo.jpg'


//Import video
import video from '../../assets/videos/premio.mp4'

export const Home = () => {

    useEffect(() => {
        document.title = "Inicio"
    }, [])

    return (
        <>
            <img className='header-image' src={ portadaUno } alt="vinedo" />
            <div className='section-home'>
                <div className='logo-home'>
                    <img className='home-logo' src={logoWhite} alt="logo" />
                </div>
            </div>
            <div className='welcome'>
                <h2>
                Nuestro portafolio nos permite ofrecerles productos de España, Brasil, 
                México e India. Nuestra oficina principal está ubicada en Zona Franca Bogotá,
                con sucursales en Cartagena y próximamente en Medellín.
                </h2>
            </div>
            <div className='player-container'>
                    <ReactPlayer 
                        url='https://www.youtube.com/watch?v=ZO3JZP6Dbgk&t=19s'
                        className='react-player'
                        muted
                        playing
                        loop
                        width='100%'
                    />
            </div>
            <div className='wines-home'>
                <div className='image-wine'>
                    <img className='wine' src={wines} alt="wines" />
                </div>
                <div className='description-wine'>
                    <h1 className='title-wine'>
                        Vinos de la Ribera del Duero 100% Ecológicos
                    </h1>
                    <p className='contain-wine'>
                        Para hacer vino excelente, el tiempo es oro.
                        Aunque la historia de Martín Berdugo se remonta
                        siglos atrás, el viñedo propio que hoy rodea nuestra
                        bodega moderna fue plantado por su dueña, Josefina,
                        en 1990 con la asistencia y el apoyo de su esposo
                        Enrique, así como de sus tres hijos Antonio, Bruno y
                        Pepa. El alma de nuestros vinos se encuentra dentro
                        de nuestro viñedo arraigado en Ribera del Duero.
                    </p>
                </div>
            </div>
            <div className='title-products'>
                <h2 className='some-products'>Algunos de nuestros productos</h2>
                <img className='bottle-image' src={bottles} alt="bottles" />
            </div>
            <div className='container-slider'>
                <div className='slider-wrap'>
                    <img className='image-slider' src={ one } alt="wine" />
                    <img className='image-slider' src={ two } alt="wine" />
                    <img className='image-slider' src={ three } alt="wine" />
                    <img className='image-slider' src={ four } alt="wine" />
                </div>
            </div>
        </>
    )
}
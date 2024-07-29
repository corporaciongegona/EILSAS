import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'

import './home.css'
import logoWhite from '../../assets/logo_white_alta.png'
import wines from '../../assets/wines.jpg'
import bottles from '../../assets/pagina_principal.png'
import vinedoGrande from '../../assets/vinedo_grande.jpg'
import portadaUno from '../../assets/portadaUno.jpg'
import vinedoInfo from '../../assets/vinedo_mas_info.jpg'
import man from '../../assets/hombre.jpg'

//Import slider
import one from '../../assets/vinos_portada/1.jpg'
import two from '../../assets/vinos_portada/2.jpg'
import three from '../../assets/vinos_portada/3.jpg'
import four from '../../assets/vinos_portada/4.jpg'
import five from '../../assets/vinos_portada/5.jpg'
import six from '../../assets/vinos_portada/6.jpg'


//Import video
import video from '../../assets/videos/premio.mp4'

export const Home = () => {

    const [url, setUrl] = useState(null)
    const dialogRef = useRef(null)
    const dialogRefDos = useRef(null)

    const showPopup = () => {
        dialogRef.current.showModal()
        document.body.classList.add('blur');
    }

    useEffect(() => {
        document.title = "Inicio"
         showPopup()
    }, [])

    const closePopup = () => {
        dialogRef.current.close()
        document.body.classList.remove('blur');
    }

    const handleKey = (event) => {
        if (event.key === 'Escape') {
            closePopup()
        }
    }

    //Funcionalidades popup dos

    const showPopupDos = () => {
        dialogRefDos.current.showModal()
        document.body.classList.add('blur');
    }

    const closePopupDos = () => {
        dialogRefDos.current.close()
        document.body.classList.remove('blur');
    }

    const clickPopup = (url) => {
        setUrl(url)
        showPopupDos()
    }

    const handleKeyDos = (event) => {
        if (event.key === 'Escape') {
            closePopupDos()
        }
    }

    document.addEventListener('keydown', handleKeyDos)

    return (
        <>

        <dialog ref={dialogRef}>
            <p onClick={closePopup} className='close'>X</p>
        <div className='player-container'>
                    <ReactPlayer 
                        url={video}
                        className='react-player'
                        muted
                        playing
                        loop
                        width='100%'
                    />
            </div>

        </dialog>

            <img className='header-image' src={ portadaUno } alt="vinedo" />
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


            <div className='wines-home'>
                <div className='image-wine'>
                    <img className='wine' src={vinedoInfo} alt="wines" />
                </div>
                <div className='description-wine'>
                    <h1 className='title-wine'>
                        El viñedo
                    </h1>
                    <p className='contain-wine'>
                    Nuestras 87 hectáreas de viñedo en un solo pago, situado 
                    a 800 metros de altura, ofrece la belleza y complejidad 
                    que sólo los suelos aluviales del valle del río Duero pueden 
                    aportar: gravas cuarcíticas, arenas, limos y arcillas ligeras, 
                    dan un carácter especial a nuestros vinos. Nuestras vides maduras, 
                    que ya alcanzan los 30 años, se encuentran en la edad perfecta para 
                    extraer los minerales que producen sabores y aromas excepcionales y distintivos.
                    Ofrecemos una gama de vinos que transmite la esencia de cada una de 
                    las distintas fincas de nuestro viñedo, historia, familia y la naturaleza que nos rodea.

                    </p>
                </div>
            </div>

            <div className='wines-home'>
                <div className='image-wine'>
                    <img className='wine' src={man} alt="wines" />
                </div>
                <div className='description-wine'>
                    <h1 className='title-wine'>
                        El hombre detrás del vino
                    </h1>
                    <p className='contain-wine'>
                    Antonio Díez Martín, un enólogo apasionado, es el miembro de 
                    la familia responsable de dirigir la operación vitivinícola 
                    de Martín Berdugo. Su entusiasmo, visión y personalidad impregnan 
                    cada aspecto del negocio. Tal es su energía y compromiso que es tan 
                    probable que lo encuentres podando vides como viajando a ferias de vinos 
                    por todo el mundo.

                    </p>
                </div>
            </div>

            

            <div className='title-products'>
                <h2 className='some-products'>Algunos de nuestros productos</h2>
                <img className='bottle-image' src={bottles} alt="bottles" />
            </div>

                <dialog className='dialog-dos' ref={dialogRefDos}>
                <p onClick={closePopupDos} className='close'>X</p>
            <div className='image-popup'>
                        <img className='image-popup-dos' src={url} alt="image-popup" />
                </div>

            </dialog>

            <div className='container-slider'>
                <div className='slider-wrap'>
                    <img onClick={() => {clickPopup(one)}} className='image-slider' src={ one } alt="wine" />
                    <img onClick={() => {clickPopup(two)}} className='image-slider' src={ two } alt="wine" />
                    <img onClick={() => {clickPopup(three)}} className='image-slider' src={ three } alt="wine" />
                    <img onClick={() => {clickPopup(four)}} className='image-slider' src={ four } alt="wine" />
                    <img onClick={() => {clickPopup(five)}} className='image-slider' src={ five } alt="wine" />
                    <img onClick={() => {clickPopup(six)}} className='image-slider' src={ six } alt="wine" />
                </div>
            </div>
        </>
    )
}
import React, { useEffect } from 'react'

import './about.css'
import makers from '../../assets/Makers.jpg'
import pairing from '../../assets/Pairing.jpg'

//Logos import
import logoEil from '../../assets/logo_eil_finish.png'
import logoMartin from '../../assets/logo-martin.png'
import logoMissiato from '../../assets/logo-missiato.png'

//Brands import
import brands from '../../assets/MARCAS.png'

export const About = () => {
    useEffect(() => {
        document.title = "Acerca de"
    }, [])

    return (
        <>
            <section className='container-about'>

                <article className='article-about'>
                    <div className='image-about'>
                        <img className='makers' src={ logoEil } alt="pairing" />
                    </div>
                    <div className='description-about'>
                        <h3 className='title-about'>
                            Quienes somos
                        </h3>
                        <h1 className='title-about'>
                            EI LOGISTIC SAS 
                        </h1>
                        <p className='info-about'>
                        "Somos una empresa apasionada por ofrecer a nuestros clientes una experiencia 
                        única a través de una cuidadosa selección de vinos y destilados importados. 
                        Constantemente buscamos innovar en el mercado con nuevas y emocionantes marcas. 
                        Nos enorgullece diferenciarnos por la calidad excepcional y precios atractivos 
                        de nuestros productos, lo cual no solo deleita a nuestros clientes, sino que también 
                        nos permite mantener costos de producción bajos para el canal Horeca y eventos. 
                        ¡Descubre nuestra selección y déjate conquistar por la excelencia en cada producto!”
                        </p>
                    </div>
                </article>
                <article className='article-about'>
                    <div className='image-about'>
                        <img className='makers' src={ makers } alt="makers" />
                    </div>
                    <div className='description-about'>
                        <h1 className='title-about'>
                            Vinos desde 
                            el año 2000
                        </h1>
                        <p className='info-about'>
                        Antiguos documentos descubiertos en los 
                        archivos familiares muestran que nuestra 
                        finca de orientación sur, situada a orillas 
                        del río Duero, al este de la villa de Aranda,
                        se ha utilizado para estudios detallados sobre
                        el cultivo de la vid desde hace al menos 200 
                        años.

                        Las actuales plantaciones comenzaron a fines de la década de 1980. 
                        Para el año 1990 nuestras 87 hectáreas de viñedo propio de un solo 
                        pago habían tomado forma. Hoy en día, después de 30 años, ha llegado 
                        un momento en el que la edad del viñedo comienza a pagar dividendos 
                        de calidad, según coinciden todos los expertos.
                        </p>
                    </div>
                </article>
                <article className='article-about'>
                    <div className='image-about'>
                        <img className='makers' src={ logoMartin } alt="makers" />
                    </div>
                    <div className='description-about'>
                        <h3 className='title-about'>
                            Nuestras marcas:
                        </h3>
                        <h1 className='title-about'>
                            Martín Berdugo – España
                        </h1>
                        <p className='info-about'>
                        Bodega y Viñedos Martín Berdugo, empresa familiar ubicada 
                        en Roa, España, se dedica a la elaboración de vinos de alta 
                        calidad en la Ribera del Duero. Fundada en 1990, apuesta por 
                        un enfoque artesanal y sostenible, utilizando técnicas tradicionales 
                        y tecnología moderna para obtener vinos elegantes y expresivos que 
                        reflejan el carácter único del terruño. Sus 87 hectáreas de viñedos 
                        en Finca Martín Berdugo, a 800 metros de altura, ofrecen suelos aluviales 
                        ricos que aportan complejidad, equilibrio y elegancia a sus vinos. Martín 
                        Berdugo invita a descubrir la pasión y el saber hacer en cada copa de sus 
                        vinos excepcionales.
                        </p>
                    </div>
                </article>
                <article className='article-about'>
                    <div className='image-about'>
                        <img className='makers' src={ logoMissiato } alt="makers" />
                    </div>
                    <div className='description-about'>
                        <h1 className='title-about'>
                            MISSIATO – Brasil
                        </h1>
                        <p className='info-about'>
                        Con un enfoque en la excelencia y la innovación, Missiato ha 
                        logrado establecerse como líder en la industria, destacándose por 
                        su compromiso con la calidad y la satisfacción del cliente. Nuestro 
                        equipo de expertos trabaja incansablemente para garantizar que cada 
                        producto no solo cumpla, sino que supere las expectativas de nuestros 
                        consumidores. Además, nuestra dedicación a la mejora continua y la adaptación 
                        a las tendencias y demandas del mercado nos permiten mantenernos a la vanguardia, 
                        ofreciendo productos que combinan tradición y modernidad.
                        </p>
                    </div>
                </article>
            </section>
            <div className='brands'>
                <img className='brands-image' src={brands} alt="brands" />
            </div>
        </>
    )
}
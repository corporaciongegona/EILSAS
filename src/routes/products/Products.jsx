import React, { useEffect } from 'react'

import './products.css'

//Wines import
import vinoUno from '../../assets/vinos/vino1.jpg'
import vinoDos from '../../assets/vinos/vino2.jpg'
import vinoTres from '../../assets/vinos/vino3.jpg'
import vinoCuatro from '../../assets/vinos/vino4.jpg'
import vinoCinco from '../../assets/vinos/vino5.jpg'

//Tequilas import
import tequilaUno from '../../assets/tequilas/tequila1.jpg'

//Vodkas import
import vodkaUno from '../../assets/vodkas/vodka1.jpg'

//whiskies import
import whiskeyUno from '../../assets/whiskies/whiskey1.jpg'
import whiskeyDos from '../../assets/whiskies/whiskey2.jpg'
import whiskeyTres from '../../assets/whiskies/whiskey3.jpg'

//Other import
import cachaza from '../../assets/vinos/vino6.jpg'
import ron from '../../assets/vinos/ron1.jpg'
import ginebra from '../../assets/vinos/ginebra1.jpg'

export const Products = () => {

   useEffect(() => {
      document.title = "Productos"
   }, [])

   return (
      <div className='container-cards-section'>
         <h1>Vino</h1>
         <div className='card-container'>
            <div className='card-section'>
               <img className='image-card' src={vinoUno} alt="image-card" />
               <h4 className='title-card'>Vino Blanco Verdejo 12.6%</h4>
               <p className='description'>Marca: Martin Verdugo, Producto importado de España</p>
               <p className='type'>Disponible en las ciudades: <br /> Bogota y Cartagena <br />*Próximamente Medellin </p>
            </div>

            <div className='card-section'>
               <img className='image-card' src={vinoDos} alt="image-card" />
               <h4 className='title-card'>Vino Rosado 14.3%</h4>
               <p className='description'>Marca: Martin Verdugo, Producto importado de España</p>
               <p className='type'>Disponible en las ciudades: <br /> Bogota y Cartagena <br />*Próximamente Medellin </p>
            </div>

            <div className='card-section'>
               <img className='image-card' src={vinoTres} alt="image-card" />
               <h4 className='title-card'>Vino tinto Barrica 14.3%</h4>
               <p className='description'>Marca: Martin Verdugo, Producto importado de España</p>
               <p className='type'>Disponible en las ciudades: <br /> Bogota y Cartagena <br />*Próximamente Medellin </p>
            </div>

            <div className='card-section'>
               <img className='image-card' src={vinoCuatro} alt="image-card" />
               <h4 className='title-card'>Vino tinto crianza 14.82%</h4>
               <p className='description'>Marca: Martin Verdugo, Producto importado de España</p>
               <p className='type'>Disponible en las ciudades: <br /> Bogota y Cartagena <br />*Próximamente Medellin </p>
            </div>

            <div className='card-section'>
               <img className='image-card' src={vinoCinco} alt="image-card" />
               <h4 className='title-card'>Vino tinto reserva 14.82%</h4>
               <p className='description'>Marca: Martin Verdugo, Producto importado de España</p>
               <p className='type'>Disponible en las ciudades: <br /> Bogota y Cartagena <br />*Próximamente Medellin </p>
            </div>
         </div>

         <h1>Tequila</h1>
         <div className='card-container'>
            <div className='card-section'>
               <img className='image-card' src={tequilaUno} alt="image-card" />
               <h4 className='title-card'>Tequila Blanco /oro 35%</h4>
               <p className='description'>Marca: Jalisciense, Producto importado de mexico</p>
               <p className='type'>Disponible en las ciudades: <br /> Bogota y Cartagena <br />*Próximamente Medellin </p>
            </div>
         </div>

         <h1>Vodka</h1>
         <div className='card-container'>
            <div className='card-section'>
               <img className='image-card' src={vodkaUno} alt="image-card" />
               <h4 className='title-card'>Vodka 39%</h4>
               <p className='description'>Producto importado de Brasil</p>
               <p className='type'>Disponible en las ciudades: <br /> Bogota y Cartagena <br />*Próximamente Medellin </p>
            </div>
         </div>

         <h1>Whisky</h1>
         <div className='card-container'>
            <div className='card-section'>
               <img className='image-card' src={whiskeyUno} alt="image-card" />
               <h4 className='title-card'>Whiskey Blenden 40%</h4>
               <p className='description'>Marca GP, Producto importado de Brasil</p>
               <p className='type'>Disponible en las ciudades: <br /> Bogota y Cartagena <br />*Próximamente Medellin </p>
            </div>

            <div className='card-section'>
               <img className='image-card' src={whiskeyDos} alt="image-card" />
               <h4 className='title-card'>Whiskey Blenden 40%</h4>
               <p className='description'>Marca Highbury, Producto importado de India</p>
               <p className='type'>Disponible en las ciudades: <br /> Bogota y Cartagena <br />*Próximamente Medellin </p>
            </div>

            <div className='card-section'>
               <img className='image-card' src={whiskeyTres} alt="image-card" />
               <h4 className='title-card'>Whiskey Blenden 40%</h4>
               <p className='description'>Marca: Bellwether</p>
               <p className='type'>Disponible en las ciudades: <br /> Bogota y Cartagena <br />*Próximamente Medellin </p>
            </div>
         </div>

         <h1>Ron, Cachaza y Ginebra</h1>
         <div className='card-container'>
            <div className='card-section'>
               <img className='image-card' src={cachaza} alt="image-card" />
               <h4 className='title-card'>Cachaza 38%</h4>
               <p className='description'>Marca: Jamel, Producto importado de Brasil</p>
               <p className='type'>Disponible en las ciudades: <br /> Bogota y Cartagena <br />*Próximamente Medellin </p>
            </div>

            <div className='card-section'>
               <img className='image-card' src={ron} alt="image-card" />
               <h4 className='title-card'>Ron Blanco 39%</h4>
               <p className='description'>Marca Pelican, Producto importado de India</p>
               <p className='type'>Disponible en las ciudades: <br /> Bogota y Cartagena <br />*Próximamente Medellin </p>
            </div>

            <div className='card-section'>
               <img className='image-card' src={ginebra} alt="image-card" />
               <h4 className='title-card'>Ginebra 40%</h4>
               <p className='description'>Marca: Pink, Producto importado de India</p>
               <p className='type'>Disponible en las ciudades: <br /> Bogota y Cartagena <br />*Próximamente Medellin </p>
            </div>
         </div>
      </div>
   )
}
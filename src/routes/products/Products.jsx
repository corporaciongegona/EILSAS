import React, { useEffect } from 'react'

import './products.css'

//Wines import
import vinoUno from '../../assets/vinos/vino1.jpg'
import vinoDos from '../../assets/vinos/vino2.jpg'
import vinoTres from '../../assets/vinos/vino3.jpg'
import vinoCuatro from '../../assets/vinos/vino4.jpg'
import vinoCinco from '../../assets/vinos/vino5.jpg'
import barrica from '../../assets/vinos/BARRICA 1.png'
import crianza from '../../assets/vinos/CRIANZA 1.png'
import reserva from '../../assets/vinos/RESERVA 1.png'

//Tequilas import
import tequilaUno from '../../assets/tequilas/tequila1.png'

//Vodkas import
import vodkaUno from '../../assets/vodkas/vodka1.png'

//whiskies import
import whiskeyUno from '../../assets/whiskies/whiskey1.png'
import whiskeyDos from '../../assets/whiskies/whiskey2.png'
import whiskeyTres from '../../assets/whiskies/whiskey3.png'

//Other import
import cachaza from '../../assets/vinos/vino6.png'
import ron from '../../assets/vinos/ron1.png'
import ginebra from '../../assets/vinos/ginebra1.png'

//PDFimport
import reserevaPdf from '../../assets/pdf/Martin-Berdugo-Technical-Sheets-2018-RESERVA.pdf'
import crianzaPdf from '../../assets/pdf/Martin-Berdugo-Technical-Sheets-2021-CRIANZA.pdf'
import barricaPdf from '../../assets/pdf/Martin-Berdugo-Technical-Sheets-2022-BARRICA.pdf'
import jovenPdf from '../../assets/pdf/Martin-Berdugo-Technical-Sheets-2023-JOVEN-1.pdf'
import rosadoPdf from '../../assets/pdf/Martin-Berdugo-Technical-Sheets-2023-ROSADO.pdf'
import verdejoPdf from '../../assets/pdf/Martin-Berdugo-Technical-Sheets-2023-VERDEJO.pdf'

export const Products = () => {

   useEffect(() => {
      document.title = "Productos"
   }, [])

   const showPdfReserva = () => {
      window.open(reserevaPdf, '_balnk')
   }
   const showPdfCrianza = () => {
      window.open(crianzaPdf, '_balnk')
   }
   const showPdfBarrica = () => {
      window.open(barricaPdf, '_balnk')
   }
   const showPdfJoven = () => {
      window.open(jovenPdf, '_balnk')
   }
   const showPdfRosado = () => {
      window.open(rosadoPdf, '_balnk')
   }
   const showPdfVerdejo = () => {
      window.open(verdejoPdf, '_balnk')
   }

   return (
      <div className='container-cards-section'>
         <h1>Vino</h1>
         <div className='card-container'>
            <div className='card-section'>
               <img className='image-card' src={vinoUno} alt="image-card" />
               <h4 className='title-card'>Vino Blanco Verdejo 12.6%</h4>
               <p className='description'>Marca: Martin Verdugo, Producto importado de España</p>
               <p className='type'>Disponible en las ciudades: <br /> Bogota y Cartagena <br />*Próximamente Medellin </p>
               <button onClick={showPdfVerdejo} className='btn-contact'>Ver ficha técnica</button>
            </div>

            <div className='card-section'>
               <img className='image-card' src={vinoDos} alt="image-card" />
               <h4 className='title-card'>Vino Rosado 14.3%</h4>
               <p className='description'>Marca: Martin Verdugo, Producto importado de España</p>
               <p className='type'>Disponible en las ciudades: <br /> Bogota y Cartagena <br />*Próximamente Medellin </p>
               <button onClick={showPdfRosado} className='btn-contact'>Ver ficha técnica</button>
            </div>

            <div className='card-section'>
               <img className='image-card' src={barrica} alt="image-card" />
               <h4 className='title-card'>Vino tinto Barrica 14.3%</h4>
               <p className='description'>Marca: Martin Verdugo, Producto importado de España</p>
               <p className='type'>Disponible en las ciudades: <br /> Bogota y Cartagena <br />*Próximamente Medellin </p>
               <button onClick={showPdfBarrica} className='btn-contact'>Ver ficha técnica</button>
            </div>

            <div className='card-section'>
               <img className='image-card' src={crianza} alt="image-card" />
               <h4 className='title-card'>Vino tinto crianza 14.82%</h4>
               <p className='description'>Marca: Martin Verdugo, Producto importado de España</p>
               <p className='type'>Disponible en las ciudades: <br /> Bogota y Cartagena <br />*Próximamente Medellin </p>
               <button onClick={showPdfCrianza} className='btn-contact'>Ver ficha técnica</button>
            </div>

            <div className='card-section'>
               <img className='image-card' src={reserva} alt="image-card" />
               <h4 className='title-card'>Vino tinto reserva 14.82%</h4>
               <p className='description'>Marca: Martin Verdugo, Producto importado de España</p>
               <p className='type'>Disponible en las ciudades: <br /> Bogota y Cartagena <br />*Próximamente Medellin </p>
               <button onClick={showPdfReserva} className='btn-contact'>Ver ficha técnica</button>
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
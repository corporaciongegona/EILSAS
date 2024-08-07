import React, { useEffect } from 'react'

import { FaWhatsapp } from 'react-icons/fa'
import vinedoGrande from '../../assets/vinedo_grande.jpg'
import portadaDos from '../../assets/portadaDos.jpg'

import './contact.css'

export const Contact = () => {
    const handleSubmit = (e) => {
        alert('Has enviado el correo con exito')
    }

    useEffect(() => {
        document.title = "Contacto"
    }, [])

    return (
        <>
            <img className='header-image' src={ portadaDos } alt="vinedo" />
            <div className='contact-container'>
                <div className='form-contact'>
                    <form onSubmit={handleSubmit} name='contact' method="POST" data-netlify="true"className='form-for-contact'>
                        <div className='form-group-contact'>
                            <label htmlFor="name">Nombre:</label>
                            <input type="text" name='name' placeholder='Tu nombre...' required/>
                        </div>

                        <div className='form-group-contact'>
                            <label htmlFor="email">Correo:</label>
                            <input type="email" name='email' placeholder='Tu correo...' required />
                        </div>

                        <div className='form-group-contact'>
                            <label htmlFor="message">Motivo del contacto:</label>
                            <textarea type="text" name='message' placeholder='Motivo...' required />
                        </div>
                        <button type='submit' className='btn-contact'>Enviar</button>
                    </form>
                </div>
                <div className='wpp'>
                    <h4>Escríbenos</h4>
                    <a href='https://wa.me/+573507687999' target='_blank'><FaWhatsapp className='wpp-item' /></a> 
                </div>
            </div>
        </>
    )
}
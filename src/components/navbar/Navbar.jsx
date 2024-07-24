import React, { useState, useRef, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'

import './navbar.css'
import logo from '../../assets/logo_finish.png'
import vinedo from '../../assets/viñedo.jpg'
import logoEil from '../../assets/logo_eil_finish.png'

export const Navbar = () => {

    useEffect(() => {
        showPopup()
    }, [])

    const [isOpen, setIsOpen] = useState(false)

    const dialogRef = useRef(null)

    const showPopup = () => {
        dialogRef.current.showModal()
        document.body.classList.add('blur');
    }

    const closePopup = () => {
        dialogRef.current.close()
        document.body.classList.remove('blur');
    }

    const handleKey = (event) => {
        if (event.key === 'Escape') {
            closePopup()
        }
    }

    document.addEventListener('keydown', handleKey)

    return (
        <>
            <header className='header'>
                <div className='container'>
                    <div className='logo'>
                       <Link to='/'><img className='logo-image' src={ logo } alt="logo" /></Link>
                    </div>
                    <div className={`toggle ${ isOpen && 'open' }`} onClick={() => setIsOpen(!isOpen)}>
                        <span></span><span></span><span></span>
                    </div>
                    <div className='menu'>
                        <nav className='nav-menu'>
                            <ol className={`menu-items ${ isOpen && 'open' }`}>
                                <li>
                                    <NavLink onClick={() => setIsOpen(!isOpen)} className={({ isActive }) => isActive ? 'active' : ''} to='/products'>Productos</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => setIsOpen(!isOpen)} to='/about'>Quienes somos</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => setIsOpen(!isOpen)} to='/home'>Mas info</NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={() => setIsOpen(!isOpen)} to='/contact'>Contacto</NavLink>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </header>
            <dialog ref={dialogRef}>
                <div className='main-popup'>
                    <img className='logoEil' src={logoEil} alt="logo" />    
                    <h3 className='title-popup'>¿ERES MAYOR DE EDAD?</h3>
                    <div>
                        <button onClick={closePopup} className='btn-contact btn-popup'>SI</button>
                        <button onClick={() => {alert('Debes ser mayor de edad para continuar navegando en nuestra página')}} className='btn-contact btn-popup'>NO</button>
                    </div>
                    <h6 className='description-popup'>
                        No admite el consumo excesivo de sus productos, principalmente por personas
                        menores de 18 años, mujeres embarazadas, o quienes conducen vehiculos.
                    </h6>
                </div> 
            </dialog>
        </>
    )  
}
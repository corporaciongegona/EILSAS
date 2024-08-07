import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Navbar } from './components/navbar/Navbar'
import { Home } from './routes/home/Home'
import { About } from './routes/about/About'
import { Products } from './routes/products/Products'
import { Contact } from './routes/contact/Contact'
import { Footer } from './components/footer/Footer'

export const App = () => {
    return (
        <>
            <Navbar />
            <Routes>

                <Route path='/' element={<Products />}></Route>
                <Route path='/products' element={<Products />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/*' element={<Navigate to='/products' />}></Route>

            </Routes>
            <Footer />
        </>
    )
}
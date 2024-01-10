import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import {HeaderNav} from '../componentes/layout/HeaderNav'
import {Footer} from '../componentes/layout/Footer'
import {Portafolio} from '../componentes/Portafolio'
import {Curriculum} from '../componentes/Curriculum'
import {Servicios} from '../componentes/Servicios'
import {Contacto} from '../componentes/Contacto'
import {Inicio} from '../componentes/Inicio'
import { Descripcion } from '../componentes/Descripcion'


export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/*Header y Navegacion */}
        <HeaderNav/>

        <section className='contenedor'>
        {/*Contenido Central */}
        <Routes>
            <Route index element={<Inicio/>} />
            <Route path='/inicio' element={<Inicio/>} />
            <Route path='/portafolio' element={<Portafolio/>} />
            <Route path='/contacto' element={<Contacto/>} />
            <Route path='/curriculum' element={<Curriculum/>} />
            <Route path='/servicios' element={<Servicios/>} />
            <Route path='/proyecto/:id' element={<Descripcion/>} />
            <Route path='*' element={
            <><h1>Error 404</h1>
            <p>Esta pagina no fue encontrada</p></>
            }/>
        </Routes>
        </section>
        

        {/*Footer */}
        <Footer/>
    </BrowserRouter>
  )
}

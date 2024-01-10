import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../App.css'

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='header-logo'><span>D</span><h2>Daniel Camacho Web</h2></div>
        <nav>
            <ul className='header-lista'>
                <li>
                    {/* Para agregar una clase mientrs esta activo el lonk */}
                    <NavLink to="/inicio" className={
                        ({isActive}) => isActive ? "active" : ""
                    }>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/servicios" className={
                        ({isActive}) => isActive ? "active" : ""
                    }>Servicios</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto" className={
                        ({isActive}) => isActive ? "active" : ""
                    }>Contacto</NavLink>
                </li>
                <li>
                    <NavLink to="/portafolio" className={
                        ({isActive}) => isActive ? "active" : ""
                    }>Portafolio</NavLink>
                </li>
                <li>
                    <NavLink to="/curriculum" className={
                        ({isActive}) => isActive ? "active" : ""
                    }>Curriculum</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

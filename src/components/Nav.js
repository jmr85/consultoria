import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <nav className="navegador">
        <div className="contenedorLogo">
          <img src="./logo.png" alt="logo" />
        </div>
        <div className="contenedorMenu">
          <ul>
            <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/proposito">Nuestro Propósito</NavLink></li>
            <li><NavLink to="/valores">Valores</NavLink></li>
            <li><NavLink to="/contacto">Contacto</NavLink></li>      
          </ul>
        </div>
      </nav>
      <div className="contenedorBannerHome">
            <img src="./logo.png" alt="logo" />
            <button>CONTÁCTANOS</button>
      </div>
    </header>
  )
}

export default Nav;

import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Nav = () => {

  // Lógica para que el nav se vuelva blanco cuando se mueva de top 0

  return (
    <header id="inicio">
      <nav className="navegador">
        <div className="contenedorLogo">
          <img src="./logo.png" alt="logo" />
        </div>
        <div className="contenedorMenu">
          <ul>
            <a href="#inicio"><li>Inicio</li></a>
            <a href="#proposito"><li>Nuestro Propósito</li></a>
            <a href="#valores"><li>Valores</li></a>
            <a href="#contacto"><li>Contacto</li></a>
            {/* <li><NavLink to="/">Inicio</NavLink></li>
            <li><NavLink to="/proposito">Nuestro Propósito</NavLink></li>
            <li><NavLink to="/valores">Valores</NavLink></li>
            <li><NavLink to="/contacto">Contacto</NavLink></li>  */}     
          </ul>
        </div>
      </nav>
      <div className="contenedorBannerHome">
            <img src="./logo.png" alt="logo" />
            <Link to="/contacto">
              <button>CONTÁCTANOS</button>
            </Link>
      </div>
    </header>
  )
}

export default Nav;

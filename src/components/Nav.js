import React from 'react'
// import { Link } from 'react-router-dom'

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
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#proposito">Nuestro Propósito</a></li>
            <li><a href="#valores">Valores</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
      </nav>
      <div className="contenedorBannerHome">
        <img src="./logo.png" alt="logo" />
        <button onClick={(e) => {
          e.preventDefault();
          window.location.href = '#contacto';
        }}>
          CONTÁCTANOS
        </button>
      </div>
    </header>
  )
}

export default Nav;

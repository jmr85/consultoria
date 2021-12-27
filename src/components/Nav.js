import React, { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link';
// import FondoBanner from '../../src/assets/fondoBanner.webp';

const Nav = () => {
  // Lógica para que el nav cambie de color cuando se hace scroll vertical
  // Por ahora lo deje con el color primario $verde-transparente
  const [isScrollY, setIsScrollY] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // console.log("scroll -> ", window.scrollY);
      if (window.scrollY > 0) {
        setIsScrollY(true)
      } else {
        setIsScrollY(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header id="inicio">
      <nav className={isScrollY ? 'navegador active' : 'navegador'}>
        <div className="contenedorLogo">
          <img src="./logo.png" alt="logo" />
        </div>
        <div className="contenedorMenu">
          <ul>
            <HashLink className='item' smooth to="/#inicio">
              Inicio
            </HashLink>;
            <HashLink className='item' smooth to="/#proposito">
              Nuestro proposito
            </HashLink>;
            <HashLink className='item' smooth to="/#valores">
              Valores
            </HashLink>;
            <HashLink className='item' smooth to="/#experiencia">
              Experiencia
            </HashLink>;
            <HashLink className='item' smooth to="/#contacto">
              Contacto
            </HashLink>;
          </ul>
        </div>
      </nav>
      <div className="contenedorBannerHome">
        <img src="./logo.png" alt="logo" />
        <button onClick={(e) => {
          e.preventDefault();
          window.location.href = '#contacto';
        }}>
          CONTACTANOS
        </button>
      </div>
    </header>
  )
}

export default Nav;

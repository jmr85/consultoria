import React, {useState, useEffect} from 'react'
import FondoBanner from '../../src/assets/fondoBanner.svg';

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
    <header id="inicio" style={{backgroundImage: `url(${FondoBanner})` }}>
      <nav className={isScrollY ? 'navegador active' : 'navegador'}>
        <div className="contenedorLogo">
          <img src="./logo.png" alt="logo" />
        </div>
        <div className="contenedorMenu">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#proposito">Nuestro propósito</a></li>
            <li><a href="#valores">Valores</a></li>
            <li><a href="#experiencia">Experiencia</a></li>
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
          CONTACTANOS
        </button>
      </div>
    </header>
  )
}

export default Nav;

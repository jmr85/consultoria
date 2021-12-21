import React, {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'

const Nav = () => {

  // Lógica para que el nav se vuelva blanco cuando se mueva de top 0
  // Por ahora lo deje con el color promario $verde
  const [isWhite, setIsWhite] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // console.log("scroll -> ", window.scrollY);
      if (window.scrollY > 0) {
        setIsWhite(true)
      } else {
        setIsWhite(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header id="inicio">
      <nav className={isWhite ? 'navegador active' : 'navegador'}>
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

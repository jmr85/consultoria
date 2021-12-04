import React from 'react'

function Footer() {
    return (
        <>
            <footer>
                <div className="footerLogo">
                    <img src="./logo.png" alt="logo"/>
                </div>
                <div className="footerRedes">
                    <h3>¡Seguinos!</h3>
                    <ul className="footerRedesFlex">
                        <li><i className="bi bi-linkedin"></i></li>
                        <li><i className="bi bi-instagram icono"></i></li>
                        <li><i className="bi bi-envelope"></i></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
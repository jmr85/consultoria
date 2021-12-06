import React from 'react'

function Footer() {
    return (
        <>
            <footer>
                <div className="footerLogo">
                    <img src="./logoFooter.png" alt="logo"/>
                    <p>Copyright 2021 - Derechos reservados </p>
                </div>
                <div className="footerRedes">
                    <h3>¡Seguinos!</h3>
                    <ul className="footerRedesFlex">
                        <li><i className="bi bi-behance"></i></li>
                        <li><i className="bi bi-linkedin"></i></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
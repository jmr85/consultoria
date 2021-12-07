import React, {useState, useEffect} from 'react'

function Footer() {
    const initialState = new Date().getFullYear();
    const [year, setYear] = useState(initialState);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, [])
    
    return (
        <>
            <footer>
                <div className="footerLogo">
                    <img src="./logoFooter.png" alt="logo"/>
                    <p>Copyright {year} - Derechos reservados </p>
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
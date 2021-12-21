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
                    <div className="footerSeguinos">
                        <h3>¡Seguinos!</h3>
                        <ul className="footerRedesFlex">
                            <li><a href="https://www.linkedin.com/in/nataliruizdegalarreta/" target="_blank"><i className="bi bi-linkedin"></i></a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="CopyrightFooter">Copyright {year} - Derechos reservados </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
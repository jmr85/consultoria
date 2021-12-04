import React from 'react'

function Valores() {
    return (
        <div className="valoresContenedor">
            <h1 className="valoresTitulo">Nuestros Valores</h1>
            <div className="valoresLista">
                <div className="valoresDiv">
                    <img className="valoresImg" src="./empresa.jpg" alt="" />
                    <p className="valores">Colaboración</p>
                </div>
                <div className="valoresDiv">
                    <img className="valoresImg" src="./empresa.jpg" alt="" />
                    <p className="valores">Honestidad</p>
                </div>
                <div className="valoresDiv">
                    <img className="valoresImg" src="./empresa.jpg" alt="" />
                    <p className="valores">Mejora<br/>Contastante</p>
                </div>
                <div className="valoresDiv">
                    <img className="valoresImg" src="./empresa.jpg" alt="" />
                    <p className="valores">Respeto</p>
                </div>
                <div className="valoresDiv">
                    <img className="valoresImg" src="./empresa.jpg" alt="" />
                    <p className="valores">Sustentabilidad</p>
                </div>
            </div>
        </div>
    )
}

export default Valores




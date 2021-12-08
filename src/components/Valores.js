import React from 'react'

function Valores() {
    return (
        <div className="valoresContenedor" id="valores">
            <h1 className="valoresTitulo">Nuestros Valores</h1>
            <div className="valoresLista">
                <div className="valoresDiv">
                    <img className="valoresImg" src="./valor1.png" alt="" />
                    <p className="valores">Colaboración</p>
                </div>
                <div className="valoresDiv">
                    <img className="valoresImg" src="./valor2.png" alt="" />
                    <p className="valores">Honestidad</p>
                </div>
                <div className="valoresDiv">
                    <img className="valoresImg" src="./valor3.png" alt="" />
                    <p className="valores">Mejora<br/>Contastante</p>
                </div>
                <div className="valoresDiv">
                    <img className="valoresImg" src="./valor4.png" alt="" />
                    <p className="valores">Respeto</p>
                </div>
                <div className="valoresDiv">
                    <img className="valoresImg" src="./valor5.png" alt="" />
                    <p className="valores">Sustentabilidad</p>
                </div>
            </div>
        </div>
    )
}

export default Valores




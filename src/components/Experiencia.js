import React from 'react'

function Experiencia() {
    return (
        <div className="experienciaContenedor" id="experiencia">
            <h1 className="experienciaTitulo">Experiencia Profesional</h1>
            <div className="experienciaLista">
                <div className="experienciaDiv">
                    <img className="experienciaNeuquenImg" src="./experiencia1.svg" alt="" />
                </div>
                <div className="experienciaDiv">
                    <img className="experienciaImg" src="./experiencia2.svg" alt="" />
                </div>
                <div className="experienciaDiv">
                    <img className="experienciaImg experienciaCirculo" src="./experiencia3.svg" alt="" />
                </div>
                <div className="experienciaDiv">
                    <img className="experienciaImg" src="./experiencia4.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Experiencia




import React from 'react'

function MisionVision() {
    return (
        <div className="misionVisionContenedor">
            <div className="visionCard cards">
                <img src="./vision.png" alt="colegas trabajando"/>
                <h2 className="mVTitulo">Visión</h2>
                <p className="mVTexto">Aportar valor y apoyar a los actores de la economía social en su crecimiento hacia la transformación digital.</p>
            </div>
            <div className="misionCard cards">
                <img src="./mision.png" alt="" />
                <h2 className="mVTitulo">Misión</h2>
                <p className="mVTexto">Buscamos crear los mejores ambientes de trabajo para organizaciones y empresas que trabajan por un futuro mejor.</p>
            </div>
        </div>
    )
}

export default MisionVision




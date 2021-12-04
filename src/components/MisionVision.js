import React from 'react'

function MisionVision() {
    return (
        <div className="misionVisionContenedor">
            <div className="misionVisionFila">
                <div className="mVImgContenedor">
                    <img src="./mision.png" alt="" />
                </div>
                <div className="misionInfoContenedor mvInfoContenedor">
                    <h2 className="mVTitulo">Misión</h2>
                    <p className="mVTexto">Buscamos crear los mejores ambientes de trabajo para organizaciones y empresas que trabajan por un futuro mejor.</p>
                </div>
            </div>
            <div className="misionVisionFila">
                <div className="visionInfoContenedor mvInfoContenedor">
                    <h2 className="mVTitulo">Visión</h2>
                    <p className="mVTexto">Buscamos crear los mejores ambientes de trabajo para organizaciones y empresas que trabajan por un futuro mejor.</p>
                </div>
                <div className="mVImgContenedor">
                    <img src="./vision.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default MisionVision



